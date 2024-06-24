import React from 'react'
// import NavLink from './NavLink'
//import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function ReactRouter() {
  return (
    <div>
         <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/blog/' element={<Blog />} />
          {/* <Route exact path='/LifeCycle/' element={<LifeCycle />} /> */}
         
          <Route exact path='/about/' element={<About/>} >
            <Route path='company' element={<Company></Company>} />
            <Route path='company2' element={<Company2></Company2>} />
            <Route path='company3' element={<Company3></Company3>} />
            <Route path='mycompany4' element={<Company4></Company4>} />
          </Route>
          
          </Routes>
      
    </div>
  )
}

