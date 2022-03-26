# nodejs-blog

A blog built by nodejs

## 文件说明

    - www.js 处理创建 http 连接，监听端口相关
    - app.js 处理 request 和 response
    - router 文件夹下面处理路由 api 相关
    - controller 文件夹下处理根据请求参数获取数据的逻辑
    - model 文件夹下定义一些数据模型
    - blog1/logs 存储日志内容
    - blog1/src/db 对 mysql，redis 等数据库查询操作进行封装
    - blog1/src/conf 数据库连接的配置
    - blog1/src/utils/log 日志写入操作
