import React from 'react'
// this export called named
export default function Profile(p){
    const red=()=>{
        alert("red function called")
    }
    return <div>
         <h1 onClick={red}> Profile component </h1> 
        <h1 onClick={red}> {p.text} </h1>
        {/*here content get from App.js p.text through*/}
    </div>
}