const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title='%${keyword}%' `
  }
  sql += `order by createtime desc;`

  // 返回promise
  return exec(sql)
}
const getDetail = (id) => {
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 1647964414629,
      author: "zhangsan",
    },
  ];
}
const newBlog = (blogData = {}) => {
  return {
    id: 3
  }
}
const updateBlog = (id, blogData = {}) => {
  //  id 是要更新博客的id
  // blogData是一个博客对象， 包含title，content
  return true
}
const deleteBlog = id => {
  return true
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
};
