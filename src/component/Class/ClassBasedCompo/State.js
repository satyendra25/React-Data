import React from 'react'

export default class State extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Saten',
            email:'bebaghel@gmail.com',
            count:0
        }
    }
    updateState(){
        this.setState({
            name:"Sandhya",
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <h1> This is State uses</h1>
                <h2>count {this.state.count}</h2>
                {/* <p> without constructor we can't use 'this' or we can't make state method</p> */}
                <p>Hello {this.state.name} Baghel  Email: {this.state.email}</p>
                <button onClick={()=>{this.updateState()}}>update name</button>
            </div>
        )
    }
}