//express是一个基于node的可以简单快速搭建服务器的js库
//先引入express
const { request, response } = require('express')
const express=require('express')
//构建一个express对象
const app=express()
const path = require('path')
//定义路由：
app.get('/a/:id?',(request,response)=>{
    console.log(request.query)//get请求发送过来的查询字符串()
    console.log(request.params)//get post都可以用 接收路由参数
   
    console.log(__dirname)
    const newpath=path.resolve(__dirname,'../assets/队列.jpg')
    // response.download(newpath)//响应给浏览器，让浏览器下载指定文件
    response.sendFile(newpath)//响应给浏览器，若浏览器可以打开，则直接打开，否则下载
    // response.send('<h1>哈哈</h1>')//send用来响应客户端，只能响应一些字符串
    // response.redirect('http://www.baidu.com')
    
})
app.post('/a/:id?',(request,response)=>{
    console.log(request.body)//post 请求上接收的数据库（需要express中间件的配合）
})

//开启服务器
app.listen(5000,(err)=>{
    if(err) console.log(err)
    else console.log("服务器启动")
})