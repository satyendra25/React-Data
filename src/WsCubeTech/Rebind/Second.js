import React, { Component } from 'react'
import "../style.css";

class Second extends Component {
   constructor(props){
    super(props);
    this.state = {

    }
   }
   buttonClickHandler = () => {
    console.log(this);
   }
    render() {
        return (
            <>
            <div className="container">
                <h4>Arrow function</h4>
            <p>its not rebind this keyword </p>
            <button type="button" onClick={this.buttonClickHandler}>Click Me</button>
           </div>
            </>
        )
    }
}
export default Second;
