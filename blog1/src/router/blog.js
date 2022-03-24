const { SuccessModel, ErrorModel } = require('../model/resModel')
const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')

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
    const data = getDetail(id)
    return new SuccessModel(data)
  }
  if (method === 'POST' && path === '/api/blog/new') {
    const data = newBlog(req.body)
    return new SuccessModel(data)
  }
  if (method === 'POST' && path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('更新博客失败')
    }
  }
  if (method === 'POST' && path === '/api/blog/del') {
    const result = deleteBlog(id)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('删除博客失败')
    }
  }
}

module.exports = handleBlogRouter