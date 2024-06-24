import React from 'react'

export default function Props(pro) {
  return (
    <div>
        <p>Props use with function based components</p>
      <h2>Name: {pro.text.name}, Age: {pro.text.age}, Subject: 
      {pro.text.sub}</h2>
    </div>
  )
}
