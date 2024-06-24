import React from "react";

class Number extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
    }
    render() {
      return (
        <div>
          <h1>{this.props.number} </h1>
          {/*Numbering between Rajneeta through props*/}
        </div>
      )
    }
}

export default Number;