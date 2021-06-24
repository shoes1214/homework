import React, { Component,useState } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import './App.css'
export default function App () {
  let todos = JSON.parse(localStorage.getItem('todos'))
  if (!todos) {
    todos = []
  }
  let [list, setList] = useState(todos)
  let all=list.length
  let done=list.filter((item)=>item.isDone===true).length
// 添加todo的函数
  function getTodoName(todoName) {
    let id=list.length?list[list.length-1].id+1:1
    let obj={
      todoName,
      isDone:false,
      id
    }

    const newList=[...list]
    newList.push(obj)
    setList(newList)
    localStorage.setItem('todos',JSON.stringify(newList))
  }
// 获取id的函数
function getId(id,type) {
  let newList
  if(type==="update"){
    newList=[...list]
    newList.forEach((item)=>{
      if(item.id===id){
        item.isDone=!item.isDone
      }
    })
  }else{
    newList=list.filter((item)=>{
      return item.id!==id
    })
  }

  setList(newList)
  localStorage.setItem('todos',JSON.stringify(newList))
}
// 全选函数
function isCheck() {
  if(all===done){
    return true
  }
}
// 全选框函数
function allCheck() {
  let re=list.every((item)=>{return item.isDone===true})
  let newList=[...list]
  if(re){
    
    newList.forEach((item)=>{
      item.isDone=false
    })
  }else{
    newList.forEach((item)=>{
      item.isDone=true
    })
  }
  setList(newList)
  localStorage.setItem('todos',JSON.stringify(newList))
}
// 删除多个函数
function deleteTodos() {
 let newList= list.filter((item)=>{return item.isDone===false})
 setList(newList)
 localStorage.setItem('todos',JSON.stringify(newList))
}
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header getTodoName={getTodoName}></Header>{list.length ? (<div>
            <List>
                {list.map((item)=>{
                  return <Item key={item.id} item={item} getId={getId}></Item>})}
            </List>
            <Footer all={all} done={done} isCheck={isCheck} allCheck={allCheck}  deleteTodos={ deleteTodos}></Footer>
          </div>):<h1>恭喜你，没有任务</h1>}
         
        </div>
      </div>
    )
  
}
