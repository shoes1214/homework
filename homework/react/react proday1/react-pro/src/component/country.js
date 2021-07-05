import React from 'react'
import { useEffect, useState } from 'react'
import { NavBar, Icon, List, Toast } from 'antd-mobile'
import getCountry from '../api/common'
import './index.css'
const Item = List.Item


export default function Country(props) {
  const { history ,location} = props
  
  let [countryData, setCountryData] = useState({})
  useEffect(async () => {
    try {
      let re = await getCountry()
      setCountryData(re.data.data)
      console.log(re.data.data)
      
    } catch (error) {
      Toast.fail('请求失败了，请刷新试试～', 2)
    }
  }, [])
  let toCountry=(item)=>{
    return (e)=>{
      window.scrollTo(0,document.getElementById(item).offsetTop-45)
    }
  }
  let back=(value)=>{
    return ()=>{
      history.push("/register/phone",value)
    }
  }
  return (
    <>
      <div className="country-nav-bar">
        <NavBar
          className="nav-bar"
          mode="light"
          icon={<Icon type="left" className="icon-left" />}
          onLeftClick={() => history.goBack()}
        >
          选择国家或者地区
        </NavBar>
        {Object.keys(countryData).map((item)=>{
          return <List renderHeader={() => item} id={item} >
            {countryData[item].map((countryObj)=>{
              console.log(countryObj)
              let countryName=Object.keys(countryObj)
              let value=countryObj[countryName]
              return <Item extra={"+" + value} key={countryName} onClick={back(value)}>{countryName}</Item>
            })}
          </List>
        })}
        
       </div>
       <ul className="country-right-bar">
         {Object.keys(countryData).map((item)=>{
           return <li key={item} onClick={toCountry(item)}>{item}</li>
         })}
       </ul>
</>
  )}
