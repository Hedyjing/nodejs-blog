const { SuccessModel, ErrorModel } = require('../model/resModel')
const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')

// 统一的登录验证函数
const loginCheck = (req) => {
  if (!req.session.username) {
    return Promise.resolve(new SuccessModel('尚未登录'))
  }
}

const handleBlogRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  const id = req.query.id

  if (method === 'GET' && path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    return getList(author, keyword).then(listData => {
      return new SuccessModel(listData)
    })
  }
  if (method === 'GET' && path === '/api/blog/detail') {
    return getDetail(id).then(data => {
      return new SuccessModel(data)
    })
  }
  if (method === 'POST' && path === '/api/blog/new') {
    // 登录验证， loginCheckResult == undefined说明有session
    const loginCheckResult = loginCheck(req)
    if (loginCheckResult) {
      return loginCheckResult
    }
    req.body.author = req.session.username
    return newBlog(req.body).then(data => {
      return new SuccessModel(data)
    })
  }
  if (method === 'POST' && path === '/api/blog/update') {
    // 登录验证， loginCheckResult == undefined说明有session
    const loginCheckResult = loginCheck(req)
    if (loginCheckResult) {
      return loginCheckResult
    }
    const result = updateBlog(id || 0, req.body)
    return result.then(result => {
      if (result) {
        return new SuccessModel()
      } else {
        return new ErrorModel('更新博客失败')
      }
    })
  }
  if (method === 'POST' && path === '/api/blog/del') {
    // 登录验证， loginCheckResult == undefined说明有session
    const loginCheckResult = loginCheck(req)
    if (loginCheckResult) {
      return loginCheckResult
    }
    return deleteBlog(id || 0, req.session.username).then(result => {
      if (result) {
        return new SuccessModel()
      } else {
        return new ErrorModel('删除博客失败')
      }
    })
  }
}

module.exports = handleBlogRouter