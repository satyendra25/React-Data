import React from 'react'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Form from './Form'
import './style.css'

import { BrowserRouter as Main, Routes, Route } from 'react-router-dom'

export default function Index() {
  return (
    <div className='indexpage'>
      <h1>Link pages</h1>
      <Main>

        <Routes>
          <Route exact path='/' element={<Home home='Home'/>} />
          <Route path='/about/' element={<About />} />
          <Route exact path='/contact/' element={<Contact />} />
          <Route path='/form' element={<Form />} />
        </Routes>
        <Footer />
      </Main>




    </div>
  )
}
