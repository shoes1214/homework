import { useEffect,useState } from 'react'
import {registerCode,checkCode} from "../../api/register"
import {
  NavBar,
  Icon,
  WingBlank,
  WhiteSpace,
  InputItem,
  Button,
  Toast
} from 'antd-mobile'
import msg from './msg.png'
import './index.less'

/* 
1.页面挂载时发送请求验证码，使用useEffect
2.设置onLeftClick事件
3.页面挂载时还会使按钮倒计时,由于页面重新渲染,因此需要状态管理
4.时间到1s时,使用另一个button组件,由于视图变化了,需要定义一个状态来管理
5.发送验证码按钮设置点击事件
6.对输入框进行表单校验,使用reg,控制下一步是否禁用,输入框需要受控,验证码需要状态管理
7.点击下一步验证验证码是否正确
*/


function CodeRegister(props) {
  let {history,location}=props
  // 挂载时发送验证码请求
  useEffect(()=>{
    async function fn(){
      await registerCode(location.state) //不需要结果,只把号码传过去就可以了
    }
    fn()
   
  },[])
  // 状态管理倒计时
  let[time,setTime]=useState(5)
  // 是否切换按钮的状态(默认为false)
  let[send,setSend]=useState(false)
  // 挂载时开始按钮倒计时,因为一挂载就倒计时,因此使用setTimeout,同时第二个参数传入time,监听time变化,时间到1s时,启用另一个按钮
  useEffect(()=>{
    setTimeout(()=>{
      if(time===1){
        setSend(true)
        return
      }
      setTime(time-1)
    },1000)
  },[time])
  // 点击发送验证码
  let sendCode=(phone)=>{
    
    return async()=>{
      // 将按钮切换,并设置最大值
      setTime(5)
      setSend(false)
      await registerCode(phone)}
  }
  // 验证码正则
  let codeReg = /^[0-9]{6}$/
// 验证码状态
let [code,setCode]=useState("")
// 输入框禁用状态
let [iptDisable,setIptDisable]=useState(true)
// 输入框change事件函数
let handleCode=(value)=>{
  if(codeReg.test(value)){
    setIptDisable(false)
  }else{
    setIptDisable(true)
  }
  setCode(value)
}
// 点击下一步函数
let next=(phone,code)=>{
return async()=>{
  let res=await checkCode(phone,code)
  if(res.data.code===20000){
    history.push("/register/password",phone)
  }else{
    Toast.fail(res.data.message,1)
  }
}
}
  return (
    <div className="verify-code">
      <NavBar
        mode="light"
        icon={<Icon className="icon-left" type="left" />}
        onLeftClick={() => {history.goBack()}}
      >
        硅谷注册
      </NavBar>
      <WingBlank>
        <img className="verify-code-msg" src={msg} alt="msg" />
        <p className="verify-code-tip">
          我们将以短信或电话的形式将验证码发送给您，请注意接听0575/025/0592/010等开头的电话
        </p>
        <div className="verify-code-container">
          <InputItem placeholder="请输入手机验证码" value={code} onChange={handleCode}/>
          {send?<Button className="verify-code-btn" onClick={sendCode(location.state)}>发送验证码</Button> : <Button className="verify-code-btn verify-code-btn-disabled">
            重新发送({time}s)
          </Button>}
        </div>
        <WhiteSpace size="xl" />

        <Button disabled type="primary" className="btn" disabled={iptDisable} onClick={next(location.state,code)}>
          下一步
        </Button>

        <span className="verify-code-question">
          遇到问题?请<a>联系客服</a>
        </span>
      </WingBlank>
    </div>
  )
}

export default CodeRegister
