import React from 'react'

export default function FunctionalCompo(pr) {
    const red = () => {
        alert("Hello saten")
    }
  return (
    <div>
      <h1>Functional based component</h1>
    <button onClick={red}>{pr.text}</button>
    </div>
  )
}
