import React from 'react'
import { useEffect,useState } from 'react'
import { Modal, NavBar, Icon, InputItem,WingBlank, WhiteSpace,Button } from 'antd-mobile'
import './RegisterPhone.less'

const alert = Modal.alert
export default function RegisterPhone(props) {
  const { history ,location} = props
  let pre="+" + (location.state || 86)
  let [phone,setPhone]=useState("")
  let[disable,setDisable]=useState(true)
  let reg=/^1[3-9]{9}$/
  let handlePhone=(val)=>{
    if(reg.test(val)){
      setDisable(false)
    }else{
      setDisable(true)
    }
    setPhone(val)
  }
  let next=()=>{
    alert(
                // 标题
                '',
                // 内容
                `我们将发送短信/语言验证码至：${phone}`,
                // 底部按钮
                [
                  { text: '不同意', },
                  {
                    text: '同意',onPress: () => console.log("ok") , style: {
                      backgroundColor: '#e94f4f',
                      color: '#fff'
                    }
                  },
                ]
              )
  }
  // useEffect(() => {

  //         alert(
  //           // 标题
  //           '注册协议及隐私政策',
  //           // 内容
  //           <span className="policy-content">
  //             在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，
  //             <span className="policy-strong">请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）</span>
  //             <span className="policy-text">《硅谷用户注册协议》</span>
  //             <span className="policy-text">《硅谷隐私政策》</span>
  //           </span>,
  //           // 底部按钮
  //           [
  //             { text: '不同意', onPress: () => history.push("/register/code") },
  //             {
  //               text: '同意', style: {
  //                 backgroundColor: '#e94f4f',
  //                 color: '#fff'
  //               }
  //             },
  //           ]
  //         )

  // }, [])
  return (
    <div className="register-phone">
      <NavBar
        mode="light"
        icon={<Icon type="left" className="register-phone-icon"/>}
        onLeftClick={() => history.push('/login/code')}
      >
        硅谷注册
      </NavBar>
      <WingBlank>
        <WhiteSpace size="lg"/>
        <InputItem placeholder="请输入手机号码" clear value={phone} onChange={handlePhone}>
        <div className="InputItem-div" onClick={()=>history.push('/country')}>
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
