import React from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = React.useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {}, [btnName]);
  return (
    <div className="flex justify-between shadow-lg m-2">
      <div className="logo-container">
        <img
          className="w-56"
          src="https://www.logodesign.net/logo/letter-f-inside-circle-with-wheat-4805ld.png?nwm=1&nws=1&industry=burger&sf=&txt_keyword=burger"
        ></img>
      </div>
      <div className="flex items-center sm:bg-yellow-500">
        <ul className="flex p-4 m-4 justify-between">
          <li className="px-4">Online Status: {onlineStatus ? "✔" : "🎁"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
