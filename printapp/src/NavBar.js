import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./assets/UserContext";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import Avatar from "./Avatar";
import axios from "axios";

const NavBar = () => {
  const { setUsername } = useContext(UserContext);
  const { dropdown, setDropDown } = useState(false);

  const Logout = (e) => {
    e.preventDefault();
    axios.post("/logout").then(() => {
      setUsername("");
    });
  };

  const menuItems = [
    {
      title: "Information",
      url: "/information",
      submenu: [
        {
          title: "Thông tin cá nhân",
          url: "/info",
        },
        {
          title: "Log out",
          url: "/url",
        },
      ],
    },
  ];

  return (
    <ul className="h-1/6 max-h-24  bg-white border-b-2 border-black grid grid-cols-6 gap-0">
      <Link className="" to="/">
        <li className="">
          <Logo />
          {/* logo */}
        </li>
      </Link>

      <Link className="" to="/">
        <li className="w-full h-full text-2xl font-semibold hover:bg-blue-300 text-center">
          <div>
            <text>TRANG CHỦ</text>
          </div>
        </li>
      </Link>
      <Link to="/printing">
        <li className="w-full  h-full text-2xl font-semibold hover:bg-blue-300 text-center">
          IN
        </li>
      </Link>
      <Link to="/buying">
        <li className="w-full h-full text-2xl font-semibold hover:bg-blue-300 text-center">
          MUA GIẤY
        </li>
      </Link>

      <Link className="" to="/">
        <li className="w-full h-full text-2xl font-semibold hover:bg-blue-300 text-center">
          <button onClick={Logout}>Log out</button>
        </li>
      </Link>
      <Link className="" to="/">
        <li className="w-full h-full text-2xl font-semibold hover:bg-blue-300 text-center">
          <>
            <Avatar />
            {/* <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setDropDown((prev) => !prev)}
            ></button>
            <Dropdown submenus={menuItems[0].submenu} dropDown={false} /> */}
          </>
        </li>
      </Link>
    </ul>
  );
};

export default NavBar;
