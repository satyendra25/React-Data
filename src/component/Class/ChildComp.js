import React, { Component } from 'react'

export default class extends Component {
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
    componentDidUpdate(pP, pS){     //privious props
        // console.log("method called", pS);
        console.log("method called", pP, this.props.data);
        // if(pS.counter<3){
        //     this.setState({counter:this.state.counter+1})
        // }
        
        // if(pS.counter==this.state.counter){
        //      console.log("Match");
        // }
       
    }
  render() {
    return (
      <div>
        <h1>Child Component {this.props.data}</h1>
      </div>
    )
  }
}
