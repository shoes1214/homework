
/* 
1.先设置矢量图标
2.点击切换图标及输入框的type,需要管理状态
3.输入密码时,需要表单校验(正则),受控方式
4.点击下一步,发送注册请求,接收返回结果,之后跳转到主页
*/
import { useEffect,useState } from "react";
import { Redirect } from "react-router-dom";
import { NavBar, Icon, WingBlank, InputItem, Button ,Toast} from "antd-mobile";
import {register} from"../../api/register"
import msg from "./msg.png";
import "./index.less";

function PasswordRegister({location,history}) {
  let phone=location.state
  // 密码正则
  const passwordReg =/^\S*(?=\S{8,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])\S*$/;
  // 是否为显示密码状态
  let[showPassword,setShowPassword]=useState(false)
  // 密码状态
  let [password,setPassword]=useState("")
  // 显示隐藏密码函数
  let psw=()=>{
    setShowPassword(!showPassword)
  }
  // 按钮禁用状态
  let[btnDisable,setBtnDisable]=useState(true)
  // 输入框change事件回调
  let handlePassword=(value)=>{
    if(passwordReg.test(value)){
      setBtnDisable(false)
    }else{
      setBtnDisable(true)
    }
    setPassword(value)
  }
  // 点击下一步函数
  let next=(phone,password)=>{
    return async()=>{
      let re=await register(phone,password)
      console.log(re)
      if(re.data.code===20000){
        history.push("/",re.data.data.user)
      }else{
        Toast.fail(re.data.message,1)
      }
    }
  }
  return (
    <div className="verify-password">
      <NavBar
        mode="light"
        icon={<Icon className="icon-left" type="left" />}
        onLeftClick={() => {history.goBack()}}>
        硅谷注册
      </NavBar>
      <WingBlank>
        <img className="verify-code-msg" src={msg} alt="msg" />
        <p className="verify-code-tip">请设置登录密码</p>
        <InputItem
          type={showPassword?"text":"password"}
          value={password}
          onChange={handlePassword}
          className="verify-password-btn"
          placeholder="请设置8-20位登录密码"
          extra={<span class={`iconfont icon-${showPassword?"yanjing_xianshi":"yanjing_yincang"
        }`} onClick={psw}></span>}
        // 通过模板字符串拼接来切换icon
        />
        <p className="verify-password-text">
          密码由8-20位字母、数字或半角符号组成，不能是10位以下纯数字/字母/半角符号，字母需区分大小写
        </p>
        <Button type="primary" disabled={btnDisable} className="btn" onClick={next(phone,password)}>
          下一步
        </Button>
        <span className="verify-code-question">
          遇到问题?请<a>联系客服</a>
        </span>
      </WingBlank>
    </div>
  );
}

export default PasswordRegister;
