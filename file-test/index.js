const fs = require('fs')
const path = require('path')

// __dirname 是当前文件index.js的路径
const fileName = path.resolve(__dirname, 'data.txt')

// 读取文件
fs.readFile(fileName, (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  // data是整个文件的二进制形式，如果文件内容很大， data也很大
  console.log(data.toString())
})

// 写入文件
const content = '新内容\n'
const opt = { flag: 'a' } // 'a'表示追加写入，'w'表示覆盖写入
fs.writeFile(fileName, content, opt, err => {
  if (err) {
    console.error(err)
  }
})

// 判断文件是否存在
fs.exists(fileName, exist => {
  console.log(exist)
})