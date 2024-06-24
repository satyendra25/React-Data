import React, { useState } from 'react'
import "./style.css";

const UseState = () => {
    const initialData = 0;
    const [myNum, setMyNum] = React.useState(initialData)
                // update function = setMyNum

    console.log(setMyNum)
  return (
    <>
      <div className="center-div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           Increment
        </div>
        <div className="button2" onClick={() => myNum>0 ? setMyNum(myNum - 1): setMyNum(0)}>
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

export default UseState;