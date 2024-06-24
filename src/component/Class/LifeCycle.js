import React, { Component } from 'react'

import XYZ from './XYZ';
export default class LifeCycle extends Component {
    constructor() {
        super();
        this.state={
            show:true
        }
        console.log("constructor");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    render() {
        console.log("render");
        return (
            <div className="container my-5">
                <h1>
                    Life Cycle Method
                </h1>
                {  this.state.show ? <XYZ/> :null  }
              <button onClick={()=>{this.setState({show:!this.state.show})}} className='btn btn-primary'>On Click</button>
            </div>
        )
    }
}
