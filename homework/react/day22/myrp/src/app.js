import React from "react"
import Li from "./component/li"
import Li1 from "./component/li1"
import Li2 from "./component/li2"
export default class App extends React.Component{
    state={value:[1,2,3] ,ischecked:true,name:"zs"}
    render(){
        return <div>
            <Li value={this.state.value} fn={this.fn} ></Li>
            <Li1 fn={this.fn} value={this.state.value}></Li1>
            <Li2  value={this.state}></Li2>
        </div>
    }
    fn=(data)=>{
        console.log(data)
    }
    fn1=(data)=>{
        console.log(this.props.ischecked)
        this.setState({
         ischecked:data.ischecked,
          name:data.name
        })
      }
}