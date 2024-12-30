import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
const Header = () => {
  const [btnName, setBtnName] = React.useState("Login");
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/letter-f-inside-circle-with-wheat-4805ld.png?nwm=1&nws=1&industry=burger&sf=&txt_keyword=burger"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
