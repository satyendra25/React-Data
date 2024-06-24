import React, { useReducer, useState } from 'react'
import "./style.css";


 const reducer = (state, action) => {
    if(action.type==="INCR"){
        state = state + 1;
    }
    if(state > 0 && action.type==="DECR"){
        state = state - 1;
    }
    return state;
 };

const UseReducer = () => {  
   // const [myNum, setMyNum] = React.useState(0)
    //currentState=myNum, updated function = setMyNum
   // console.log(setMyNum)
   
const initialData = 5;
const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className="center-div">
        <p>{state}</p>
        <div className="button2" onClick={() => dispatch({type:"INCR"}) }>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           Increment
        </div>
        <div className="button2" onClick={() => dispatch({type:"DECR"}) }>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
           Decrement
        </div>
      </div>
    </>
  )
}

export default UseReducer;