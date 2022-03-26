var express = require('express');
var router = express.Router();
const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')


router.post('/login', function (req, res, next) {
  return login(req.body.username, req.body.password).then(result => {
    if (result?.username) {
      // 设置该用户的session
      req.session.username = result.username
      req.session.realname = result.realname

      res.json(new SuccessModel(req.session))
      return
    } else {
      res.json(ErrorModel('登录失败'))
    }
  })
});

router.get('/login-test', (req, res, next) => {
  if (req.session.username) {
    res.json({
      errno: 0,
      msg: '测试成功'
    })
    return
  }
  res.json({
    errno: -1,
    msg: '未登录'
  })
})

module.exports = router;
