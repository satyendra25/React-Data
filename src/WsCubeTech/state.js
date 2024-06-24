import React, {Component} from 'react'

class State extends Component{
  constructor(props){
      super(props);
      this.props = props;
      this.state = {
        name: "Satyendra baghel",
        age : 32,

      }
  }
  nameChangeHandler(){
    console.log(this.state)
    this.setState({name:"Rajneeta", age: 45}, () => {
        console.log(this.state)
    })
                // alert("alert is work");
  }

  render(){
      return (
          <div className='state'>
              <h3>Dear {this.state.name}, Welcome to my home </h3>
              <p> Age is {this.state.age}  </p>
              <button onClick={this.nameChangeHandler.bind(this)}>Click me</button>
          </div>
      )
  }
}

export default State;