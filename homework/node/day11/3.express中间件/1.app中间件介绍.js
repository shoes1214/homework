const express=require('express')
const app=express()



/* app.use(function(request,response,next){
    console.log('中间件1')
    next()
})//自定义中间件 */
/* app.use(express.urlencoded({extended:true}))//app.use使用中间件 写在路由上面 这个中间件可以post接收到req.body */
app.use(express.static(__dirname+'/public'))
//处理静态资源：html，css，js，图片...
app.get('/test',(req,res)=>{
    res.send('get-ok')
})  


app.post('/test', (req, res) => {
    console.log(req.body)
    res.send('post-ok')
  })//配合postman发送post请求
app.listen(5000,()=>{
    console.log('ok')
})