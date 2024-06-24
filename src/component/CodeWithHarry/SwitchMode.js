import React from 'react'

export default function SwitchMode(props) {
  return (
    <> <h1>Color switch mode</h1>
        <div className={`form-check form-switch text-${props.mode==='silver'?'gray':'silver'}`}>
            <input className='form-check-input' type="checkbox" style={{backgrondColor: props.mode==='silver'?'gray':'silver'}} onClick={props.toggleMode} id='textSwitchMode' />
            <label className='form-check-label' htmlFor="flexSwitchMode" > Enable Dark Mode</label>
           
            
            
        </div> 
    </>
  )
}
