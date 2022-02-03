import React from "react";
import '../assets/style/Header.css';

const Header = () => {
    return(
        <header className="Header">
            <div className="logoContainer">
                <img className="logoHeader" src={require("../assets/img/logo.png")}  alt="" />  
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
