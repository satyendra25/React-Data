import React, { Component } from 'react'
import ChildComp from './ChildComp';

export default class UpdateMethod extends Component {
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
  render() {
    return (
      <div>
        <h1>ComponentDidUpdate Lifecycle Method</h1>
        <ChildComp data={this.state.counter}/>
        <button className='btn bt-primary mt-5' onClick={()=>this.setState({counter:this.state.counter+1})}>
            OnClick {this.state.counter}</button>
      </div>
    )
  }
}
