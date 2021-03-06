import React, { useState } from "react";
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Toast,
} from "antd-mobile";
import { Link } from "react-router-dom";
import { createForm } from "rc-form";

import { connect } from "react-redux";
import { getUser } from "@redux/actions";

import { phoneReg, passwordReg } from "@utils/reg";

import "./index.css";

function PasswordLogin({
  form: { getFieldProps, getFieldsValue },
  getUser,
  history,
}) {
  const [isPass, setIsPass] = useState({
    isPhonePass: false,
    isPasswordPass: false,
  });

  const validator = (rule, value, callback) => {
    let passObj = {
      ...isPass,
    };

    if (rule.field === "phone") {
      if (phoneReg.test(value)) {
        passObj.isPhonePass = true;
      } else {
        passObj.isPhonePass = false;
      }
    } else {
      if (passwordReg.test(value)) {
        passObj.isPasswordPass = true;
      } else {
        passObj.isPasswordPass = false;
      }
    }

    setIsPass(passObj);

    callback();
  };

  const login = async () => {
    // Atguigu2020
    const { phone, password } = getFieldsValue();
    const token = await getUser(phone, password);
    // 将token持久化存储
    localStorage.setItem("token", token);
    history.replace("/");
  };

  return (
    <div className="login container">
      <NavBar
        mode="light"
        icon={<Icon className="left" type="left" />}
        // onLeftClick={() => console.log("onLeftClick")}
      >
        硅谷注册登录
      </NavBar>
      <WhiteSpace size="xl" />
      <WingBlank size="lg">
        <InputItem
          clear
          placeholder="用户名/邮箱/手机号"
          {...getFieldProps("phone", {
            rules: [
              {
                validator,
              },
            ],
          })}
        />
        <WhiteSpace size="lg" />
        <div className="login-code">
          <InputItem
            {...getFieldProps("password", {
              rules: [
                {
                  validator,
                },
              ],
            })}
            clear
            placeholder="请输入密码"
            type="password"
            extra={<span className={"iconfont icon-eye1"}></span>}
          />
          <button
            className="login-btn-text login-btn"
            style={{ color: "#000" }}
          >
            忘记密码
          </button>
        </div>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Button
            disabled={!(isPass.isPhonePass && isPass.isPasswordPass)}
            type="warning"
            className="warning-btn"
            onClick={login}
          >
            登录
          </Button>
        </WingBlank>
        <WhiteSpace size="lg" />
        <div className="login-btn-wrap">
          <Link to="/login" className="login-btn-text">
            短信验证码登录
          </Link>
          <Link to="/regist/verifyphone" className="login-btn-text">
            手机快速注册
          </Link>
        </div>
        <div className="login-other-text">其他登录方式</div>
        <div className="login-icons">
          <span
            // onTouchEnd={this.loginByGithub}
            className="iconfont icon-github"
          ></span>
          <span className="iconfont icon-qq"></span>
          <span className="iconfont icon-wechat"></span>
        </div>
        <span className="login-private-policy">
          未注册的手机号验证后将自动创建硅谷账号, 登录即代表您已同意
          <Link to="/login/pwd" className="login-private-policy-btn">
            硅谷隐私政策
          </Link>
        </span>
      </WingBlank>
    </div>
  );
}

// const WrappedForm = createForm()(PasswordLogin);
// const WrappedConnect = connect()(WrappedForm);
// export default WrappedConnect;

// const WrappedConnect = connect()(PasswordLogin);
// const WrappedForm = createForm()(WrappedConnect);
// export default WrappedForm;

export default createForm()(connect(null, { getUser })(PasswordLogin));
