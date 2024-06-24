import React, { useState } from 'react'

function About() {

    const [myStyle, setMyStyle] = useState(
        {
            border: '2px solid red',
            backgroundColor: 'green',
            color: 'black'
        }
    )
    const [btntext, setbtntext] = useState("Enable Dark Mode")

  const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border:'2px solid red'
            }) 
            setbtntext('Enable Light mode')
        }
         else {
            setMyStyle({
                backgroundColor: 'green',
                color: 'black',
                border:'2px solid red'
            })
            setbtntext('Enable Dark mode')
        }
    }
    return (
        <>
        <div className="about">
            <ul>
                {/* <li><Link to='about'>About us</Link></li> */}
            </ul>
        </div>
            <div className="container" style={myStyle}>
                <h2 className='my-3'>About us</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis minus commodi error molestiae perspiciatis illo voluptatibus. Tempore dolor odio ad hic dolorum rem similique ducimus fugiat? Ea veritatis nihil vero doloremque rem blanditiis esse! Modi fugit officia facere consequatur molestiae, enim cumque repellat, obcaecati quam accusantium nisi. Molestiae voluptatem obcaecati animi!</p>
            </div>

            <button onClick={toggleStyle}>{btntext}</button>
        </>
    )
}

export default About;
