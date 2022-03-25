const env = process.env.NODE_ENV // 环境参数 和package.json中的对应

let MYSQL_CONF
let REDIS_CONF

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '654321',
    port: '3306',
    database: 'myblog'
  }
  REDIS_CONF = {
    host: '127.0.0.1',
    port: 6379
  }
}

if (env === 'production') {
  // 应该用线上的，这里没有线上的条件所以用本地的测试
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '654321',
    port: '3306',
    database: 'myblog'
  }
  REDIS_CONF = {
    host: '127.0.0.1',
    port: 6379
  }
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}