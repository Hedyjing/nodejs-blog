// 标准输入输出
// process.stdin.pipe(process.stdout)

// 网络IO流
// const http = require('http')
// const server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     req.pipe(res)
//   }
// })
// server.listen(8000)

// 文件IO流
// const fs = require('fs')
// const path = require('path')

// const fileName1 = path.resolve(__dirname, 'data1.txt')
// const fileName2 = path.resolve(__dirname, 'data2.txt')

// const readStream = fs.createReadStream(fileName1)
// const writeStream = fs.createWriteStream(fileName2)

// readStream.pipe(writeStream)
// readStream.on('end', () => {
//   console.log('stream done')
// })

// 文件IO + 网络IO
const http = require('http')
const fs = require('fs')
const path = require('path')

const fileName1 = path.resolve(__dirname, 'data1.txt')
const readStream = fs.createReadStream(fileName1)

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    readStream.pipe(res)
  }
})
server.listen(8000)