const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 创建客户端
const client = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
client.on('error', err => {
  console.error(err)
})

function set(key, val) {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  client.set(key, val, redis.print)
}

function get(key) {
  return new Promise((resolve, reject) => {
    client.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      if (val == null) {
        resolve(null)
        return
      }
      try {
        resolve(JSON.parse(val))
      } catch (e) {
        resolve(val)
      }
    })
  })
}

module.exports = {
  set, get
}