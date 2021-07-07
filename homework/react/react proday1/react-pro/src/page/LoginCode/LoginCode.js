/* 
1.先设置矢量图标
2.设置两个link标签的路径
3.手机号输入框进行表单校验(定义reg,表单受控,状态管理)
4.点击发送验证码,切换按钮(视图改变,使用状态管理)
5.按钮倒计时功能,时间到1s切换按钮
6.验证码输入框进行表单校验
7.点击登录按钮,发送请求(成功跳转首页,失败轻提示)
*/
import { useState, useEffect } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Toast
} from 'antd-mobile'
import { registerCode } from '../../api/register'
import { loginCode } from '../../api/login'
import { Link } from 'react-router-dom'

import './index.less'

const TOTAL_TIME = 5

function Login({ history, location }) {
  // 手机正则
  const phoneReg = /^1[3-9][0-9]{9}$/
  // 手机号状态
  const [phone, setPhone] = useState('')
  // 验证码按钮状态
  let [btn, setBtn] = useState(false)
  // 手机输入框change事件回调
  let handlePhone = (value) => {
    if (phoneReg.test(value)) {
      setBtn(true)
    } else {
      setBtn(false)
    }
    setPhone(value)
  }
  // 是否发送验证码请求状态
  let [sendCode, setSendCode] = useState(false)
  // 验证码按钮点击事件(发送请求,改变sendcode状态,设置定时器时间)
  let handleBtn = (phone) => {
    return () => {
      setSendCode(true)
      setTime(TOTAL_TIME)
      registerCode(phone)
    }
  }
  //设置时间状态(设置为0为了一开始不启动定时器)
  let [time, setTime] = useState(0)
  //定时器
  useEffect(() => {
    if (time === 0) {
      return
    }
    setTimeout(() => {
      if (time === 1) {
        //   到1s时按钮状态改变,切换另一个按钮
        setSendCode(false)
        return
      }
      setTime(time - 1)
    }, 1000)
  }, [time])
  //验证码正则
  const codeReg = /^[0-9]{6}$/
  //验证码状态
  let [code, setCode] = useState('')
//   下一步按钮禁用状态
let [nextDisable,setNextDisable]=useState(true)
  //验证码输入框change事件回调
  let handleCode=(value)=>{
	if(codeReg.test(value)){
		setNextDisable(false)
	}else{
		setNextDisable(true)
	}
	setCode(value)
  }
//   登录按钮点击事件回调
let loginBtn=async()=>{
	let res= await loginCode(phone,code)
	
	 if(res.data.code===20000){
		console.log(res.data.data)
		 history.push("/",res.data.data)
	 }else{
		 Toast.fail(res.data.message,1)
	 }
}
  return (
    <div className="login container">
      <NavBar mode="light">硅谷注册登录</NavBar>
      <WhiteSpace size="xl" />
      <WingBlank size="lg">
        <InputItem
          clear
          placeholder="请输入手机号"
          value={phone}
          onChange={handlePhone}
        >
          <div className="phone-prefix">
            <span>+86</span>
            <Icon type="down" />
          </div>
        </InputItem>
        <WhiteSpace size="lg" />
        <div className="login-code">
          <InputItem
            clear
            placeholder="请输入手机验证码"
            value={code}
            onChange={handleCode}
          />
          {sendCode ? (
            <button
              className="login-btn-text login-btn"
              style={{
                color: '#848689',
              }}
            >
              重新获取({time}s)
            </button>
          ) : (
            <button
              disabled={!btn}
              className="login-btn-text login-btn"
              style={{ color: btn ? 'red' : '#848689' }}
              onClick={handleBtn(phone)}
            >
              获取验证码
            </button>
          )}
        </div>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Button disabled type="primary" onClick={loginBtn} className="btn" disabled={nextDisable}>
            登录
          </Button>
        </WingBlank>
        <WhiteSpace size="lg" />
        <div className="login-btn-wrap">
          <Link to="/login/password" className="login-btn-text">
            账户密码登录
          </Link>
          <Link to="/register/phone" className="login-btn-text">
            手机快速注册
          </Link>
        </div>
        <div className="login-other-text">其他登录方式</div>
        <div className="login-icons">
          <span className="iconfont icon-gitee-fill-round"></span>
          <span className="iconfont icon-QQ"></span>
          <span className="iconfont icon-weixin"></span>
        </div>
        <span className="login-private-policy">
          未注册的手机号验证后将自动创建硅谷账号, 登录即代表您已同意
          <a className="login-private-policy-btn">硅谷隐私政策</a>
        </span>
      </WingBlank>
    </div>
  )
}

export default Login
