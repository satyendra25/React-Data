import React from 'react'
import { Link } from 'react-router-dom'
function AboutThap() {
  return (
    <div>
      <header>          
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>                  
                </ul>
            </nav>
            </header> 
            <section>About Thapa page</section>
    </div>
  )
}

export default AboutThap
