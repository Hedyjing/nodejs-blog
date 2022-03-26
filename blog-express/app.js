var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')

// 引入路由， 对应blog1中app.js的引入路由

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog')
const userRouter = require('./routes/user')

// 给每一个请求创建一个express实例
var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// 对应blog1中的日志access()
app.use(logger('dev'));
// 下面两行对应blog1中的app.js处理post data, 这样就可以在req.body直接访问post数据了
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 对应blog1中解析cookie， 可以通过req.cookie访问
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'dkE$_*234_',
  cookie: {
    // path: '/',  // 默认
    // httpOnly: true,  // 默认
    maxAge: 24 * 3600 * 1000
  }
}))

// 注册路由
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/blog', blogRouter)
app.use('/api/user', userRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
