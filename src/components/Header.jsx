import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/header.css";

const Header = () => {
  return (
    <header className="Header">
      <div className="logoContainer">
        <Link href="#" to="/">
          <img
            className="logoHeader"
            src={require("../assets/img/logo.png")}
            alt=""
          />
        </Link>
      </div>
      <div className="botonContainer">
        <button className="botonHeader" type="button">
          Sing In
        </button>
      </div>
    </header>
  );
};
export default Header;
