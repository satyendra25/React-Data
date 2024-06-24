import React from 'react'
import Navbar from './Navbar';
//import { Form } from 'react-router-dom';
import Form from './Form';
import Error from './Error';
import Footer from './Footer';
import Home from './Home';
import Blog from './Blog';
import LifeCycle from './LifeCycle';


import About from "./About";
import Company from './Company'
import Company2 from './Company2'
import Company3 from './Company3'
import Company4 from './Company4'

import Contact from './Contact';
import MyContact from './Mycontact'
import HomeContact from './Homecontact';
import OfficeContact from './Officecontact';
import "./style.css";

import { BrowserRouter as Main, Routes, Route } from 'react-router-dom'
import UpdateMethod from './updateMethod';

export default function Index() {
  return (
    <>
      <Main>      
        <Navbar title="React App" aboutText="About" blog="blog" contactText="Contact" formText="Form" />       
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
          <Route exact path='/contact/' element={<Contact/>}>
            <Route path='officecontact' element={<OfficeContact/>} />
            <Route path='homecontact' element={<HomeContact/>} />
            <Route path='mycontact' element={<MyContact/>} />
                       
          </Route>
          <Route exact path='/form/' element={<Form/>} />
          <Route exact path='/*' element={<Error />} />
        </Routes>
        <Footer />
        
      </Main>
      <LifeCycle/>
      <UpdateMethod/>
  
    </>
  )
}
