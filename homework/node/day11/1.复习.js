/* 
mongoose

1.下载引入
2.连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/数据库名)
3.创建schema对象
    new mongoose.Schema({})
4.创建model对象
    mongoose.model('集合名'，schema对象)
5.RRUD



express搭建路由

1.引入
2.创建应用对象

 const app=express()

 3定义路由

 app.get('路径:路由参数?',回调函数)

 4开启服务器

 app.listen(端口号，回调)


 请求对象
 获取get请求通过查询字符串传递过来的数据：request.query
 获取路由参数:requerst.params
 获取post传递的信息：requset.body

 响应对象

 重定向：response.redirect('地址')
 响应字符串：response.send()
 响应下载:response.download
 响应文件打开:response.sendFile()  只能写绝对路径  一般配合path模块的rsolve和__dirname
*/