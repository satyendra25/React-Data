import React, { Component } from "react";

class Prop extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return (
            <div>
                <h3>Dear {this.props.name}, Welcome to my home </h3>
                <p>{this.props.name}, Age is {this.props.age}, </p>
            </div>
        )
    }
}

export default Prop;