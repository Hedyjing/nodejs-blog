const { SuccessModel, ErrorModel } = require('../model/resModel')
const { login } = require('../controller/user')
const { set } = require('../db/redis')

const handleUserRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  if (method === 'POST' && path === '/api/user/login') {
    return login(req.body.username, req.body.password).then(result => {
      if (result?.username) {
        // 设置该用户的session
        req.session.username = result.username
        req.session.realname = result.realname
        set(req.cookie.userid, req.session)
        return new SuccessModel(req.session)
      } else {
        return new ErrorModel('登录失败')
      }
    })
  }
  if (method === 'GET' && path === '/api/user/login-test') {
    if (req.session.username) {
      return Promise.resolve(new SuccessModel({ session: req.session }))
    }
    return Promise.resolve(new SuccessModel('尚未登录'))
  }
}
module.exports = handleUserRouter