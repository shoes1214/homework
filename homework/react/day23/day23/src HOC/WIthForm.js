import React, { Component } from 'react'
/* 
1.导入react
2.导出函数（形参为导出的标签）
3.返回一个组件
4.组件中设置静态displayname属性、state、方法
5.组件render的jsx为与形参同名的标签
*/
export default function withForm(WrappedComponent) {
  return class WIth extends Component {
    static displayName = 'With' + WrappedComponent.name
    state = {
      username: '',
      password: '',
      repassword: '',
    }

    fn = (type) =>(e) => {
      this.setState({ [type]: e.target.value})
    }
    render() {
      return (
        <>
          <WrappedComponent {...this.props} {...this.state} fn={this.fn}></WrappedComponent>
        </>
      )
    }
  }
}
