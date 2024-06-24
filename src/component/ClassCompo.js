 import React from 'react'
// or
//import Rect, {Component} from 'react'
 class ClassCompo extends React.Component{ 
//class ClassCompo extends Component{
    constructor(){ {/* here we use or not constructor and super not neccessary*/}
        super()
    }

    render(){
        return( 
            <div> <h1>Class based Component</h1></div>
        )
    }
}


export default ClassCompo;