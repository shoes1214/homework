import React from 'react'
import { useEffect,useState } from 'react'
import { Modal, NavBar, Icon, List, InputItem,WingBlank, WhiteSpace,Button,Toast } from 'antd-mobile'
import { phoneNum } from '../../api/register'
import {Link} from "react-router-dom"
import './RegisterPhone.less'
/* 
1.弹框的不同意选项跳转到/register/code
使用props.history.push
2.设置头部nav-bar,设置默认样式
3.设置输入框，按钮
4.#NavBar-InputItem 点击跳转新页面 country
5.接收到country的数据，渲染到span中（默认值+86）
6.对输入框进行表单检验
7.设置下一步按钮的点击事件,判断手机号是否注册过,没有就跳转到/register/code,将手机号传过去,有就toast
8.判断是否从country跳回来（通过是否有location.state）,有的话不alert，没有才弹窗
9.修改跳转到国家的按钮，使用history.push
*/
const alert = Modal.alert
export default function RegisterPhone(props) {
  const { history,location } = props
  let pre="+" + (location.state || 86)//location.state接收history.push传过来的数据

  let reg=/^1[3-9]{9}$/  //手机号的正则
  // 由于表单校验会影响视图渲染，因此相关的数据需要状态管理，所以引入useState
  let [phone,setPhone]=useState("")
  let [disable,setDisable]=useState(true)
  // onchange触发的函数，表单校验
  let handlePhone=(value)=>{
   if(reg.test(value)){ 
    setDisable(false)
   }else{
    setDisable(true)
   }
   setPhone(value) //输入框的state与输入内容保持一致
  }
  // 按同意的函数
  let handlePress=(phone)=>{
    // 返回一个函数,使用async await来处理promise对象,接收其返回结果,根据结果的状态值判断
    return async()=>{
      let re=await phoneNum(phone)
      if(re.data.code===20000){
        history.push("/register/code",phone)
      }else{
          Toast.fail(re.data.message,1)
      }
    }
    
  }
  
  //按下一步的函数
let next=()=>{
  return alert(
        // 标题
        '',
        // 内容
       `将短信/语音发送至${phone}`,
        // 底部按钮
        [
          { text: '不同意',  },
          {
            text: '同意',
            onPress:handlePress(phone) ,
            style: {
              backgroundColor: '#e94f4f',
              color: '#fff',
            },
          },
        ]
      )
}

  useEffect(() => {
    if(location.state){
      return
    }
    alert(
      // 标题
      '注册协议及隐私政策',
      // 内容
      <span className="policy-content">
        在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，
        <span className="policy-strong">
          请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）
        </span>
        <span className="policy-text">《硅谷用户注册协议》</span>
        <span className="policy-text">《硅谷隐私政策》</span>
      </span>,
      // 底部按钮
      [
        { text: '不同意', onPress: () => history.push('/register/code') },
        {
          text: '同意',
          style: {
            backgroundColor: '#e94f4f',
            color: '#fff',
          },
        },
      ]
    )
  }, [])
  return (
    <div className="register-phone">
      <NavBar
        mode="light"
        icon={<Icon type="left" className="icon-left"/>}
        onLeftClick={() => history.goBack()}
      >
        硅谷注册
      </NavBar>
      <WingBlank>
      <WhiteSpace size="lg"/>
      <InputItem placeholder="请输入手机号" clear value={phone} onChange={handlePhone}>
        <div id="NavBar-InputItem" onTouchEnd={()=>{history.push("/country","registerPhone")}}>
          {/* history.push第一个参数传入地址，绑定点击事件 */}
          <span>{pre}</span>
          <Icon type="down"></Icon>
        </div>
      </InputItem>
      <WhiteSpace size="lg"/>
      <Button type="primary" className="btn" disabled={disable} onClick={next}>下一步</Button>
      </WingBlank>
     
    </div>
  )
}
