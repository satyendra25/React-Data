import React, { Component } from 'react'
import "../style.css";

class FirstMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demo: "Testing",
        };
    }
    buttonClickHandler() {
        //console.log(this.props);
        console.log(this.state);
    }
    render() {
        return (
            <>
                <div className="container">
                    <h2>First</h2>
                    <p>its  </p>
                    <button type="button" onClick={() => this.buttonClickHandler()}>Click Me</button>
                </div>
            </>
        )
    }
}
export default FirstMethod;
