import React from 'react'

export default function Form() {
  return (
   <div className="container">
     <div className='mb-3'>
        <h1>Enter The Text</h1>
        <label for="myText" className='form-label'> Example textarea</label>
        <textarea className='form-control' id='myText' rows="3"></textarea>
    </div>
   </div>
  )
}

