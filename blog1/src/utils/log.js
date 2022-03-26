const fs = require('fs')
const path = require('path')

// 生成write stream
function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName)
  return fs.createWriteStream(fullFileName, { flags: 'a' })
}

// 写访问日志
function access(log) {
  createWriteStream('access.log').write(log + '\n')
}

module.exports = {
  access
}