import React from 'react'
import { Link, Outlet } from 'react-router-dom'



export default function Home(props) {
  return (
    <div>
      <h2>Home Section</h2>
      <div className="container">
            <Link to='home'>{props.home} </Link>
            <Link to='about'>About </Link>
            <Link to='contact'>Contact </Link>
            <Outlet/>
        </div>   
    </div>
  )
}
