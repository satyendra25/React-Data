import React, { useState } from 'react'

function Index() {
    const [color, setColor]  = useState("olive")
      return (
    <div style={{backgroundColor: color, width:"300px", height:"300px", display: "flex", justifyContent:"center"}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
                <button onClick={() => setColor ("indigo")} style={{backgroundColor:"indigo"}}>Indigo</button>
                <button onClick={() => setColor ("green")} style={{backgroundColor:"green"}}>Green</button>
                <button onClick={() => setColor ("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
                <button onClick={() => setColor ("Blue")} style={{backgroundColor:"blue"}}>Blue</button>
                <button onClick={() => setColor ("white")} style={{backgroundColor:"white"}}>white</button>
                <button onClick={() => setColor ("orange")} style={{backgroundColor:"orange"}}>Orange</button>
                <button onClick={() => setColor ("Violet")} style={{backgroundColor:"violet"}}>Violet</button>
                <button onClick={() => setColor ("Red")} style={{backgroundColor:"red", border:"none", padding:"3px 5px",}}>Red</button>
                {/* <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}}>Pink</button> */}           
           </div>
        </div>
    </div>
  )
}
export default Index;
