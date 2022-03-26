var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')


router.get('/list', function (req, res, next) {
  const author = req.query.author || ''
  const keyword = req.query.keyword || ''
  // const loginCheckResult = loginCheck(req)
  // if (loginCheckResult) {
  //   return loginCheckResult
  // }
  return getList(author, keyword).then(listData => {
    res.json(new SuccessModel(listData))
  })
});

router.get('/detail', function (req, res, next) {
  res.json({
    errno: 0,
    data: 'OK'
  })
})

module.exports = router;
