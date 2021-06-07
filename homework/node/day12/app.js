(async function(){
const express=require('express')
const db=require('./mongo/db')
const brouter=require("./router/brouter")
const afrouter=require("./router/afterlogin")
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
var cookieParser = require('cookie-parser')
await db
const app=express()

app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(
    session({
      name: 'web0323', //设置cookie的name，默认值是：connect.sid
      secret: 'atguigu', //参与加密的字符串（又称签名）
      saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
      resave: true, //是否在每次请求时重新保存session
      store: new MongoStore({
        url: 'mongodb://localhost:27017/test-app',
        touchAfter: 24 * 3600, // 24小时之内只修改一次
      }),
      cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作
        maxAge: 1000 * 30, // 这一条 是控制 sessionID 的过期时间的！！！
      },
    })
  )

app.set('view engine', 'ejs')
app.set('views', './mb')

app.use(brouter)
app.use(afrouter)

app.listen(5000,()=>{
    console.log('成功')
})
})()

