import React, { Component } from 'react'
import Style from "./style.module.css";
import "../style.css";


class IndexCss extends Component {

    render() {
        // console.log(Style);
        const style = { color: "red", border: "2px solid black", }

        return (
            <>
                <h1>CSS in React</h1>
                <div className={Style.contain}>
                    <h1 style={style}>internal CSS</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p style={{ color: "green", background: "black", width: "100px", padding: "15px", }}> inline CSS</p>
                    <p className='contain'> Hello world </p>
                </div>
                <div >
                    <h1 className="contain">Modue CSS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </>
        )
    }
}

export default IndexCss;