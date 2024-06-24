import React, { useState } from 'react'

export default function ColorProject() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className="col" style={{ backgroundColor: color }}>
        <h1>Color Changer Project </h1>
        <button onClick={() => setColor('red')} style={{ backgroundColor: 'red' }}>Red</button>
        <button onClick={() => setColor('green')} style={{ backgroundColor: 'green' }}>Green</button>


      </div>

    </>
  )
}
