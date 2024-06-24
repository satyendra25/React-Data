import React, { Component } from 'react'

export default class XYZ extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
  render() {
    return (
      <div>
        <h3>Hello world</h3>
        <p>componentWillUnmount will work</p>
      </div>
    )
  }
}
