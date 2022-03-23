const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 1647964414629,
      author: "zhangsan",
    },
    {
      id: 2,
      title: "标题B",
      content: "内容B",
      createTime: 1647964470653,
      author: "lisi",
    },
  ];
};
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
