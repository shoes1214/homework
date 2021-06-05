const express=require('express')
const path=require('path')
const { Z_STREAM_END } = require('zlib')
const router=express.Router()

router.get('/main',(req,res)=>{
    let { userid } = req.cookies
    if (userid) {
        res.render('main', {
            user: { username:'zs',date:'无' }
        })}
    else{
        res.redirect('http://127.0.0.1:5000/html/login.html')
    }

})
router.get('/tz',(req,res)=>{
    let { userid } = req.cookies
    if (userid) {
        res.sendFile(path.resolve(__dirname, '../public/html/tz.html'))}
    else{
        res.redirect('http://127.0.0.1:5000/html/login.html')
    }

})
module.exports=router