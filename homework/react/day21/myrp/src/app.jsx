import React from 'react'
import Count from './count/count'
export default class App extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div>
        <Count />
      </div>
    )
  }
}
