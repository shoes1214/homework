import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Modal,
  NavBar,
  Icon,
  WingBlank,
  WhiteSpace,
  InputItem,
  Button,
} from 'antd-mobile'
import './RegisterPhone.less'
import { useState } from 'react'

const alert = Modal.alert
export default function RegisterPhone(props) {
  let { history, location } = props

  let pre = '+' + (location.state || 86)
  let reg = /^1[3-9]{9}$/
  let [phone, setPhone] = useState('')
  let [disable, setDisable] = useState(true)
  let handlePhone = (value) => {
    if (reg.test(value)) {
      setDisable(false)
    } else {
      setDisable(true)
    }
    setPhone(value)
  }

  let next = () => {
    alert(
      // 标题
      '',
      // 内容
      `短信或语音发送至${phone}`,
      // 底部按钮
      [
        { text: '不同意' },
        {
          text: '同意',
          onPress: () => console.log("ok"),
          style: {
            backgroundColor: '#e94f4f',
            color: '#fff',
          },
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
        icon={<Icon type="left" className="icon-left" />}
        onLeftClick={() => history.goBack()}
        className="register-phone-navbar"
      >
        硅谷注册
      </NavBar>
      <WingBlank>
        <WhiteSpace size="lg" />
        <InputItem
          clear
          placeholder="请输入手机号"
          value={phone}
          onChange={handlePhone}
        >
          <Link className="register-phone-inputitem" to="/country">
            <span>{pre}</span>
            <Icon type="down"></Icon>
          </Link>
        </InputItem>
        <WhiteSpace size="lg" />
        <Button
          type="primary"
          className="btn"
          onClick={next}
          disabled={disable}
          onClick={next}
        >
          下一步
        </Button>
      </WingBlank>
    </div>
  )
}
