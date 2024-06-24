import React, { useEffect, useState } from 'react'
import "./style.css";
import { cleanup } from '@testing-library/react';

const UseEffect = () => {
   
    const [myNum, setMyNum] = useState(0)
    // update function = setMyNum
// hooks use always on top
useEffect(() => {
  document.title = `Chats${myNum}`;
}); // array dependency[]
  console.log("Hii")
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

            </div>
        </>
    )
}

export default UseEffect;