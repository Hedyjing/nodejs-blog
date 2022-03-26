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

# express-blog

## express 中间件

    app.use((req, res, next) => {
        ....
        next()
    })
    app.get('/',...)
    app.post('/',...)
    命中之后如果有next继续往下，use不需要判断， get和post要判断请求类型和路由路径

---

中间件原理

    1. app.use用来注册中间件
    2. 遇到http请求，根据method和path判断触发哪些
    3. 实现next机制，上一个通过next触发下一个

---

代码实现

    1. express实例维护几个栈，第一个all,存放所有use注册的中间件，以及get,post
    2. register函数判断use,get,post方法的参数,从而把中间件参数压入栈
    3. use,get,post方法调用register函数，压入自己对应的all，get,post栈
    4. listen创建httpserver，传入callback回调： （req,res)=>{}
    5. callback中实现res.json:设置content-type,转换 json对象
        1. 然后解析url和method，通过match匹配中间件，最后把匹配的中间件传入handler(req,res,next){}
    6. next函数中弹出stack拿到第一个中间件，执行，然后再执行next
