import React, { useEffect, useState } from 'react'
import {
  Modal,
  NavBar,
  Icon,
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Toast,
} from 'antd-mobile'
import getCountry from '../api/common'
import './country.less'
const Item = List.Item
/* 
1.设置顶部（同registerphone）
2.页面挂载时需要从服务端获取国家数据
    由于服务端不支持cors且没法改动，由于只有浏览器发送特殊http请求到服务器才会触发同源策略，因此需要引入代理服务器，浏览器-本地服务器（3000服务器）-（使用代理请求功能）-5000服务器。需要下载依赖，设置配置文件。
3.使用useEffect模拟生命周期钩子函数的挂载
4.由于需要监听服务器发送过来数据的变化，若有变化就要更新视图，因此需要将服务器发送过来数据进行状态管理，因此要使用useState模拟state
5.promise状态失败,页面轻提示
6.遍历生成列表
7.调整样式，使用position：fixed使顶部固定
8.生成侧边字母
9.侧边字母添加点击事件，点击时会跳转到对应的List
10.location.state接收参数，通过参数点击Item判断跳转页面地址，将号码传递过去
*/
export default function Country(props) {
  const { history,location } = props
  let [country, setCountry] = useState({}) //由于接受的数据是一个对象，因此初始化成一个对象
  useEffect(() => {
    async function fetchData() {
      try {
        let re = await getCountry() //axios发送ajax返回一个promise对象，使用await async处理成异步函数，状态成功会返回一个对象，使用setCountry管理起来
        setCountry(re.data.data)
      } catch (error) {
        Toast.fail('请重新刷新 !!!', 1)
      }
    }
    fetchData()
  }, [])
  //高阶函数，点击跳转到对应的list,返回一个事件处理函数,通过id获取List
  let toList=(item)=>{
    return (e)=>{
      window.scrollTo(0,document.getElementById(item).offsetTop-45)
      // 传入两个参数，x和y,不用加单位
    }
  }
  //高阶函数，点击跳转到registerphone,返回函数,通过history.push传数据
  let toPhone=(value)=>{
    return ()=>{
      if(location.state==="registerPhone"){
        history.push("/register/phone",value)
      }else if(location.state==="loginCode"){
        history.push("/login/code",value)
      }
    
    }
  }

  return (
    <div>
      <NavBar
        className="country-navbar"
        mode="light"
        icon={<Icon type="left" className="icon-left" />}
        onLeftClick={() => history.goBack()}
      >
        选择国家或地区
      </NavBar>
      <div className="country-main">
        {/* Object.keys(对象)，会将对象的key生成一个数组 */}
        {Object.keys(country).map((item) => {
          return (
            <List renderHeader={() => item} key={item} id={item}>
              {/* 在List中继续遍历，生成国家与号码的Item */}
              {country[item].map((countryObj) => {
                let countryName = Object.keys(countryObj) //countryobj使用object.key方法获取到只有一个字符串的数组，react直接解析数组
                let countryNum = countryObj[countryName] //通过key获取对应value
                return (
                  <Item extra={'+' + countryNum} key={countryName} onClick={toPhone(countryNum)}>
                    {countryName}
                  </Item>
                )
              })}
            </List>
          )
        })}
      </div>
      <ul className="country-ul">
        {Object.keys(country).map((item) => {
          return <li key={item} onClick={toList(item)}>{item}</li>
        })}
      </ul>
    </div>
  )
}
