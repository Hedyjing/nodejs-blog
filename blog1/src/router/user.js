const { SuccessModel, ErrorModel } = require('../model/resModel')
const { checkLogin } = require('../controller/user')

const handleUserRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  if (method === 'POST' && path === '/api/user/login') {
    const result = checkLogin(req.body.username, req.body.password)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('登录失败')
    }
  }
}
module.exports = handleUserRouter