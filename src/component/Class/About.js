import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <>
      <h4>About Section </h4>
      <p><u><b><i>How to link in React JS </i></b></u></p>
   
      <Link to="company">About company Link is working </Link><br/>
      <Link to="company2">About company 2</Link><br/>
      <Link to="company3">About company 3</Link><br/>
      <Link to="mycompany4">About company 4</Link><br/>
      <Outlet/>
    </>
  )
}

