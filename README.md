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

## 1. 处理 HTTP 请求，开发 api 接口

## 2. api 对接数据库

## 3. 登录校验

    1. cookie
    2. session优化cookie缺陷
    3. redis优化session缺陷

## 4. 日志

    1. 文件stream操作日志
        createReadStream, createWriteStream
    2. readline分析日志

## 5. 安全

    1. sql注入
        mysql.escape 转义sql中的特殊字符（去特殊化）
    2. XSS攻击： 窃取前端cookie内容
    3. 密码加密
