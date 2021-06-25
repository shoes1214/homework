import React, { Component,useState,useEffect } from 'react'
import PubSub from 'pubsub-js'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import './App.css'
export default function App () {
  let todo=JSON.parse(localStorage.getItem("todo"))
  if(!todo){
    todo=[]
  }
    let[list,setList]=useState(todo)
    let all=list.length
    let done=list.filter((item)=>item.isDone).length
    PubSub.publish("all",all)
    
  // 定义一个传递id的函数
  function getId(id,type){
    let newList
    if(type==="update"){
       newList=list.map((item)=>{
        if(item.id===id){
          item.isDone=!item.isDone
        }
        return item
      })
    }else{
       newList=list.filter((item)=>{
        return item.id!==id
      })
    }
    setList(newList)
    localStorage.setItem("todo",JSON.stringify(newList))
  }
  // 定义一个添加todo函数
function addTodo(todoName){
let id=list.length?list[list.length-1].id+1:1
let obj={
  todoName,id,isDone:false
}
let newList=[...list]
newList.push(obj)
setList(newList)
localStorage.setItem("todo",JSON.stringify(newList))
}
// 定义复选框函数
function allDone(){
  let newList
  let result=list.every((item)=>item.isDone)
   newList=list.map((item)=>{
     item.isDone=!result
     return item
   })
  setList(newList)
  localStorage.setItem("todo",JSON.stringify(newList))
}
// 定义删除多个函数
function deleteTodos(){
  let newList=list.filter((item)=>!item.isDone)
  setList(newList)
  localStorage.setItem("todo",JSON.stringify(newList))
}
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={addTodo}></Header>
          {list.length?(<div>
            <List>
              {list.map((item)=><Item item={item} getId={getId} key={item.id}></Item>)}
            </List>
            <Footer all={all} done={done} allDone={allDone} deleteTodos={deleteTodos}></Footer>
          </div>):<h1>恭喜你，没有任务</h1>}
        </div>
      </div>
    )
  
}
