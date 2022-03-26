var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')
const loginCheck = require('../middleware/loginCheck')

router.get('/list', function (req, res, next) {
  const author = req.query.author || ''
  const keyword = req.query.keyword || ''

  return getList(author, keyword).then(listData => {
    res.json(new SuccessModel(listData))
  })
});

router.get('/detail', function (req, res, next) {
  return getDetail(id).then(data => {
    res.json(new SuccessModel(data))
  })
})

router.post('/new', loginCheck, (req, res, next) => {
  req.body.author = req.session.username
  return newBlog(req.body).then(data => {
    res.json(new SuccessModel(data))
  })
})

router.post('/update', loginCheck, (req, res, next) => {
  const result = updateBlog(req.query.id || 0, req.body)
  return result.then(result => {
    if (result) {
      res.json(new SuccessModel())
    } else {
      res.json(new ErrorModel('更新博客失败'))
    }
  })
})

router.post('/del', loginCheck, (req, res, next) => {
  return deleteBlog(req.query.id || 0, req.session.username).then(result => {
    if (result) {
      res.json(new SuccessModel())
    } else {
      res.json(new ErrorModel('删除博客失败'))
    }
  })
})

module.exports = router;
