import React from 'react'

//  function MenuCard() {
const MenuCard = ({ menuData }) => {
    // console.log(menuData)
    return (
        <>
            {
                menuData.map((curElement) => {
                    const { id, name,Image, price, description } = curElement;
                    // this is de-Structuring
                    return (
                        <>
                            <div className="container" key={id}>
                                {/* <div className="item clearfix">
                                    <ul>
                                        <li>Home</li>
                                        <li>about</li>
                                        <li>services</li>
                                        <li>Contact</li>
                                    </ul>
                                </div> */}
                                <div className='cards' >
                                    <div className="cir">
                                        <div className='num'> {id}</div> 
                                        {/* Remove here {curElement.id} == simply "id" type */}
                                    </div>
                                    <div className="heading"><h1>{name}</h1>
                                    <p style={{textTransform:"uppercase", color:"yellow", fontWeight:"bold", letterSpacing:"2px"}}>{curElement.category}</p>
                                        <p>{description}</p>
                                    </div>
                                    <div className="img clearfix"><img src={Image} alt=''>                    
                                    </img>
                                    <div className='price'><p>Price-{price}</p></div>
                                    </div>                                    
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </>
    )
}
export default MenuCard;