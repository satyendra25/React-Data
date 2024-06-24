import React from 'react'

// export default function Navbar({filterItem, menuList}) {
 const Navbar = function ({filterItem, menuList}) {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {menuList.map((curElement) => {
                        return (
                            <button className="btn-group-item" onClick={() => filterItem(curElement)}>{curElement}</button>
                        );
                    })}
                    
                    {/* <button className="btn-group-item" onClick={() => filterItem("lunch")}>Lunch</button>
                    <button className="btn-group-item" onClick={() => filterItem("dinner")}>Dinner</button>
                    <button className="btn-group-item" onClick={() => filterItem("milk")}>Milk</button> */}
                    {/* <button className="btn-group-item" onClick={() => setMenuData(Menu)} > All</button> */}
                </div>
            </nav>
        </>
    )
}
export default Navbar;
