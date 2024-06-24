import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextForm from './TextForm'
import About from './About'
import SwitchMode from './SwitchMode'
import Alert from './Alert'
import ColorProject from './ColorProject'
import ReactRouter from './ReactRouter'

export default function Navbar(props) {
    const [mode, setMode] = useState('green')
    const toggleMode = () => {
        if (mode === 'green') {
            setMode('gray')
            document.body.style.backgroundColor = 'green'
        }
        else {
            setMode('pink')
            document.body.style.backgroundColor = 'pink'
        }
    }
    return (
        <>
        <ReactRouter/>
            {/* <div className="nav">
                <ul>
                    <li><a href="/">{props.home}</a></li>
                    <li><a href="/">{props.about}</a></li>
                    <li><a href="/">{props.contact}</a></li>
                    <li><a href="/">{props.blog}</a></li>
                </ul>
            </div> */}
            <div className="container my-5" >
                <Alert alet={"this is alert"} />
                <ColorProject />
                <TextForm heading='Form Section' />
                <SwitchMode mode={mode} toggleMode={toggleMode} />
                <About />

            </div>

        </>
    )
}

Navbar.prototype = {
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    contact: PropTypes.string
}
Navbar.defaultProps = {
    home: 'Home',
    about: 'About us',
    contact: 'Contact us',
    blog: 'Blog'
}
// here blog is not pass props ratherthen it show value it take from "defaultProps"


