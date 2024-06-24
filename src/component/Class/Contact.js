import React from 'react'
// import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Contact() {
  return (
    <>
        <div className="contact">
            <h2>Contact Us</h2>
            <p>About Contact details </p>
        </div>
        <Link to='mycontact'>Contact</Link><br/>
        <Link to='homecontact'>Home Contact</Link><br/>
        <Link to='officecontact'>Office Contact</Link><br/>

        {/* <Outlet/> */}
       
    </>
  )
}

export default Contact;
