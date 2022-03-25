const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`

  // 返回promise
  return exec(sql)
}
const getDetail = (id) => {
  id = id || 1
  const sql = `select * from blogs where id=${id}`
  // 要返回一个对象
  return exec(sql).then(rows => {
    return rows[0]
  })
}
const newBlog = (blogData = {}) => {
  const { title, content, author } = blogData
  Date.now()
  const sql = `insert into blogs (title, content, createtime,author) 
  values ('${title}','${content}',${Date.now()},'${author}');`
  return exec(sql).then(insertData => {
    return {
      id: insertData.insertId
    }
  })
}
const updateBlog = (id, blogData = {}) => {
  //  id 是要更新博客的id
  // blogData是一个博客对象， 包含title，content
  const { title, content } = blogData
  const sql = `update blogs set title='${title}',content='${content}' where id=${id}`

  return exec(sql).then(updateData => {
    return updateData.affectedRows === 1
  })
}
const deleteBlog = (id, author) => {
  const sql = `delete from blogs where id=${id} and author=${author};`
  return exec(sql).then(deleteData => {
    return deleteData.affectedRows === 1
  })
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
};
