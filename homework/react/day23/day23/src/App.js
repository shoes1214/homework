import React, { Component,useEffect,useState } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import './App.css'
export default function App (){
    let [list,setList] = useState([
      { id: 1, todoName: '吃饭', isDone: true },
      { id: 2, todoName: '敲代码', isDone: false },
    ])
    
  function getTodoName(todoName) {
    let id=list.length?list[list.length-1].id+1:1
    let obj={
      todoName,
      id,
      isDone:false
    }
    const newList=[...list]
    newList.push(obj)
    setList(newList)
  
     
    }
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header getTodoName={getTodoName}></Header>
          <div>
            <List>
              {list.map((item)=>{
                return <Item key={item.id} item={item}></Item>
              })}
            </List>
            <Footer></Footer>
          </div>
        </div>
      </div>
    )
  
}
