import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/bklogo.png";

const Logo = () => {
  return (
    <Link to="/">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "85px",
          width: "85px",
        }}
      >
        <img src={logo} alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
