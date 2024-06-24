import React from "react";
//import PropTypes from 'prop-types';
//import { Link } from "react-router-dom";

// class Navbar extends React.Component{
export default function Navbar(props) {
    return (
        <>
            <div className="link">              
                {/* <Link to="/">{props.aboutText}</Link>
                <Link to="/">{props.contactText}</Link> */}
            </div>
            <div className="navbar">
                <div className="logo"><h1>Logo</h1></div>
                <div className="nav">
                <ul>                   
                    <li><a href="/About">{props.aboutText}</a></li>
                    <li><a href="/Contact">{props.contactText}</a></li>
                    <li><a href="/Blog">{props.blog}</a></li>
                    <li><a href="/form">{props.formText}</a></li>
                </ul>
                </div>
            </div>
        </>
    )
}

// Navbar.ProtoTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string.isRequired,
//     contactText: PropTypes.string.isRequired,
//     formText: PropTypes.string.isRequired,  
//     blog: PropTypes.string.isRequired   
// }
// Or =  default PropsTypes
// Navbar.defaultProps = {
//     title: 'ReactJS',
//     aboutText: ' About Text',   
//     contactText: 'Contact Text',
//     formText: 'form Text',
//     blog: 'blog text'
// }

