import React, { Component } from "react";

export default class pract extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
    }
    render(){
       // console.log(this.props)
        return(
        <div><h2>Hello Rajneeta {this.props.surname}, {this.props.age}</h2></div>
        )
    }
}

// export default pract;