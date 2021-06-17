/* 
1.可读可写流复制文件
const fs=require("fs")
let rs=fs.createReadStream('./...')
let ws=fs.createWriteStream('./...')
rs.pipe(ws)
ws.on("close",()=>{})
2.数据库分类、结构、crud（mongoose）
1.关系型 ：MySQL Oracle 软件 数据库 表 数据行 字段
2.非关系型：mongodb redis 软件 数据库 集合 文档

使用：
1.引入mongoose
const mongoose=require('mongoose')
2.连接数据库
mongoose.connect("mongodb://127.0.0.1:5000/数据库名")
3.获取schema函数
const Schema=mongoose.Schema
4.创建schema对象
const schemaObj=new Schema({
    name:{
        type:string,
        required:(布尔值，表示必填)
        default：(默认值)
    }
    {collection:指定集合名}
})
5.创建model对象
const modelobj=mongoose.model(集合名，schemaObj)
6.crud
modelobj.create({
    name:'zs',
    age:18
},()=>{})
若没写回调函数，则返回一个promise对象

modelobj.find({age:{$in:[1,2,3]}},{_id:0},()=>{})
modelobj.findOne({age:{$in:[1,2,3]}},{_id:0},()=>{})

modelobj.updateMany({name:'zs'},{$set:{age:18}},()=>{})
modelobj.updateOne({name:'zs'},{$set:{age:18}},()=>{})

modelobj.deleteOne({name:'zs'},()=>{})
modelobj.deleteMany({name:'zs'},()=>{})



3.express使用

1.引入
const express=require('express')
2.创建应用对象
const app=express()
3.配置中间件
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'))
app.use((req,res,next)=>{next()})
4.配置路由
app.get((req,res)=>{
    req.params
    req.query
    res.send()
})
app.post((req,res)=>{
    req.params
    req.body
})
5.开启服务器
app.listen(5000,(err)=>{
    console.log(err)
})


4.get和post
1.get请求会把数据显示在地址栏中，相对不安全
2.get请求上传的数据大小有限，post理论上不限
3.上传用post，获取用get

5.node特点
1.异步非阻塞i/o
2.单线程
3.适合i/o密集型，不适合cpu密集型


6.url输入到渲染

1.dns解析
2.tcp连接：3次握手
1.浏览器告诉服务器，准备好了，将发送syn
2.服务告诉浏览器，准备好了，确认syn+ack
3.浏览器告诉服务器，确认完毕，发送ack

3发送请求
4返回响应

5.渲染

6.tcp断开：4次挥手
1.浏览器告诉服务器，请求报文已发送
2.服务器告诉浏览器，请求报文已接收，可准备断开
3.服务器告诉浏览器，响应报文已发送
4.浏览器告诉服务器，响应报文已接收，可以断开



7.ajax请求

1.创建xhr对象
const xhr=XMLHtmlRequest()
2.调用open方法，创建首行
xhr.open(get/post，'http://127.0.0.1:5000/test?name=zs&age=18')
3.post请求，setHeaderReaquest设置请求头
xhr.setHeaderReaquest("content-type","application/x-www-form-urlencoded")
4.设置请求主体，发送请求
xhr.send("data="+data)
5.监听响应结果
xhr.onreadystatechange=function(){
    if(xhr.readystate===4){
        if(xhr.status===200){
            console.log(xhr.responseText)
        }
    }
}


8.同源策略

协议名，域名，端口号相同
同源发送请求前，会给服务器发送与预请求，查看是否支持CORS，支持才发送，否则不发送

9.跨域
1.jsonp
特点：只能发送get请求，需要服务器配合

const script=doucumnet.createElement('script')
script.src='http:127.0.0.1:5000/test?callback=fn'
document.body.appendChild(script)


app.get('./test',(req,res)=>{
    let arr=[1,2]
    let{callback}=req.query
    res.send(`${callback}(${JSON.stringify(arr)})`)

2.CORS
const cors=require('cors')
app.use(cors())
})
*/