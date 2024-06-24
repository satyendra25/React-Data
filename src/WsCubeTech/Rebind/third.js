import React, { Component } from 'react'
import "../style.css";
class Third extends Component {
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
                    <h4>Third</h4>
                    <p>inline binding </p>
                    <button type="button" onClick={this.buttonClickHandler.bind(this)}>Click Me</button>
                </div>
            </>
        )
    }
}
export default Third;
