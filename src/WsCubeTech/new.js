// import React from "react";
import { Component } from "react";

class New extends Component{
    constructor (props){
        super(props);
        this.state = {
           name: "Sattu",
           age :33
        };
    }
    render() {
      return (
        < >
        <div className="new">
           <p> {this.state.name}, {this.state.age}</p>
        </div>
          
        </>
      )
    }
}

export default New;