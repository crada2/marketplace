import React from "react";
import "../assets/style/footer.css"

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerText">
        <p className="">
          © 2022 Crada, Inc. All rights reserved
        </p>
        <div className="footerIcons">
          <a className="icons">
            <img src={require("../assets/img/instagram.png")} alt="" width="40px"/>
          </a>
          <a className="icons">
          <img src={require("../assets/img/twitter.png")} alt="" width="40px" />
          </a>
          <a className="icons">
          <img src={require("../assets/img/facebook.png")} alt="" width="40px"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

