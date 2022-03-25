const { SuccessModel, ErrorModel } = require('../model/resModel')
const { login } = require('../controller/user')

// 获取cookie过期时间
const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 3600 * 1000))
  return d.toGMTString()
}
const handleUserRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  if (method === 'POST' && path === '/api/user/login') {
    return login(req.body.username, req.body.password).then(result => {
      if (result?.username) {
        // 服务端设置cookie
        res.setHeader('Set-Cookie', `username=${result.username}; path=/; httpOnly; expires=${getCookieExpires()}`)
        return new SuccessModel()
      } else {
        return new ErrorModel('登录失败')
      }
    })
  }
  if (method === 'GET' && path === '/api/user/login-test') {
    if (req.cookie.username) {
      return Promise.resolve(new SuccessModel(req.cookie.username))
    }
    return Promise.resolve(new SuccessModel('尚未登录'))
  }
}
module.exports = handleUserRouter