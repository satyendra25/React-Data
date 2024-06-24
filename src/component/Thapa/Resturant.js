import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElement) => {
      // ... triple dot is spread
      return curElement.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Resturant = () => {
  // data store // how to manage data that's by
  // this is hooks
  // hooks use only top
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElement) => {
      return curElement.category === category;
    });
    setMenuData(updatedList);
  };
  // const MyStyle = { backgroundColor: "black", color:"#fff" , margin:"5px", paddingLeft:"50px"};
  // This is Internal CSS
  return (
    <>
      {/* data forward one component to other component or parent to child component */}

      <Navbar filterItem={filterItem} menuList={menuList} />
      {/* here two props pass */}

      <MenuCard menuData={menuData} />

      {/* <div style={MyStyle}>
            <h1>Heading of this page</h1>
        </div> */}
      {/* Here we use internal CSS */}
      <div className="nav">
        {/* how to add id and work */}
        {/* <ul style={{display:"flex"}}>
                <li onClick={ () => filterItem("breakfast")}><a href="#"> Home</a></li>
                <li><a href="https://getbootstrap.com/"> About</a></li>
                <li><a href="https://getbootstrap.com/"> Contact</a></li>
                <li> <a href="https://getbootstrap.com/">Services</a> </li>
            </ul> */}
      </div>
      {/* <div className="main">
            <div className="first"><h2>First section</h2>
            <div><span>1</span></div>
            <div><img src="Image/01.jpg" alt="noImage" /></div>
            </div>
            <div className="second">sidebar</div>
        </div>
        <div className="footer"><p>Lorem, ipsum dolor.</p></div> */}
    </>
  );
};

export default Resturant;
