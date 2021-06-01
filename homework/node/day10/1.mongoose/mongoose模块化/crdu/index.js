(async function(){
    
    try{ const re=require('../db')
    await re
    const model=require('../model')
    model.create({ name:'ls',
                  age:18,
                  info:'play'})}
    catch(err){
        console.log(err)
    }
   
})()
