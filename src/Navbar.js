import React from "react";
import Img from "./transximg/Img.png"

const Navbar = () => {
  return (
    <div className="container">
    
      <div className="nav">
        <div className="menu_left">
            <div className="left">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="logo">

                <img src={Img} alt=""/>
            </div>
            </div>
        <div className="center">
        
        <div className="menu">
        <ul>
            <li>
            <div className="homebar">
            <div className="Home">HOME<i class="fa-sharp fa-solid fa-chevron-down" ></i>
          <div className="menu_home">
          <ul>
<li id="link1"><a href="">Home Cargo</a></li>
<li id="link2"><a href="">Home Logistic</a></li>
<li id="link3"><a href="">Home Transport</a></li>
<li id="link4"><a href="">Home Moving</a></li>
<li id="link5"><a href="">Home shipping</a></li>
<li id="link6"><a href="">Home Warehouse</a></li>
</ul>
            </div>
            </div>
            </div>
            
            </li>
            
            <li><div className="Pages">PAGES<i class="fa-sharp fa-solid fa-chevron-down"></i></div></li>

            <li><div className="Services">SERVICES<i class="fa-sharp fa-solid fa-chevron-down"></i></div></li>
            <li><div className="Blog">BLOG<i class="fa-sharp fa-solid fa-chevron-down"></i></div></li>
            <li><div className="Shop">SHOP<i class="fa-sharp fa-solid fa-chevron-down"></i></div></li>
            <li><div className="Elements">ELEMENTS<i class="fa-sharp fa-solid fa-chevron-down"></i></div></li>
        </ul>
        </div> 
        </div>
        <div className="right">
        <div className="menu_right">


           
                <h4>GET A QUOTE</h4>
                </div>
                </div>
                </div>
        </div>
      
  );
};

export default Navbar;
