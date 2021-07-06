import React from 'react'
import { useEffect, useState } from 'react'
import { Modal, NavBar, Icon, InputItem, Button,Toast,List } from 'antd-mobile'
import getCountry from '../api/common'
import "./country.less"
export default function Country(props) {
  let { history } = props
  const Item = List.Item;
  let[country,setCountry]=useState({})
  useEffect(async()=>{
    try{
      let re=await getCountry()
      setCountry(re.data.data)
    }catch(error){
      Toast.fail('Load failed !!!', 1);
    }
    
  },[])
 

let toItem=(item)=>{
  return ()=>{
    window.scrollTo(0,document.getElementById(item).offsetTop-45)
  }
}


let toPhone=(value)=>{
  return ()=>{
    history.push("/register/phone",value)
  }
}
  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" className="icon-left" />}
        onLeftClick={() => history.push('/register/phone')}
        className="country-navbar"
      >
        选择国家或地区
      </NavBar>
      <div className="country-main">
      {Object.keys(country).map((item)=>{
        return <List renderHeader={() => item} id={item} key={item}>
          {country[item].map((countryObj)=>{
            let countryName=Object.keys(countryObj)[0]
            let countryNum=countryObj[countryName]
            return <Item extra={'+'+countryNum} key={countryName} onClick={toPhone(countryNum)}>{countryName}</Item>
          })}
        </List>
      })}
      </div>
      <ul className="country-ul">
      {Object.keys(country).map((item)=>{
        return <li key={item} onClick={toItem(item)}>{item}</li>
      })}
      </ul>
      
    </div>
  )
}
