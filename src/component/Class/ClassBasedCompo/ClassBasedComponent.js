import React, { Component } from 'react'
import FunctionalCompo from './FunctionalCompo';
import Props from './Props';
import PropsClass from './PropsClass';
import State from './State'

export default class ClassBasedComponent extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    console.log("Called life");
  }
  render() {
    return (
      <div>
         <h2>Class Based Component this</h2>

         <FunctionalCompo text={"click me"}/>
         {/* <Props text= "This is props here" /> */}
         <Props text= {{name:"Satyendra", age:"32", sub:"Enginnering"}} />
        <PropsClass text={{name:"Baghel", data:"999"}} hobbis= "Love-Nature" />
        {/* <PropsClass text={{name:"Sandhya Baghel", data:"102"}} hobbis= "Reading books" />
        <PropsClass text={{name:"Sandhya Baghel", data:"102"}} hobbis= "Reading books" /> */}
        {/* <p>use many times </p> */}

        <State/>
      </div>
    )
  }
}


