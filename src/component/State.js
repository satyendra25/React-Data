import React from "react";

export default class State extends React.Component {
  constructor(props) {
    super(props)
    this.props = props; {/* use always small letter with this.state or this.props  */ }
    this.state = {
      name: "A_State", age: 45,
      
    };
  }
  render() {
    return (
      <div>
        <h3>This is {this.state.name}  property, {this.state.age} </h3>
      </div>
    )
  }
}

// export default State;
