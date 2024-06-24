import React, { Component } from 'react'

export default class BlogItem extends Component {
    constructor(props){
        super(props);
        this.state ={date: new Date()};
       // console.log("Hello world")
    }
    render() {
        let { title, description, image } = this.props;
        return (
            <>
                <div class="card" style={{ width: "18rem" }}>
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title} It is {this.state.date.toLocaleTimeString()}</h5>
                        <p class="card-text">{description}  
                            </p>
                        <a href="http://localhost:3000/Blog" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </>
        )
    }
}