const { SuccessModel, ErrorModel } = require('../model/resModel')
const { login } = require('../controller/user')

const handleUserRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  if (method === 'POST' && path === '/api/user/login') {
    return login(req.body.username, req.body.password).then(result => {
      if (result?.username) {
        return new SuccessModel()
      } else {
        return new ErrorModel('登录失败')
      }
    })
  }
}
module.exports = handleUserRouter