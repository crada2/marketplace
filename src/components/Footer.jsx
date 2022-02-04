import React from "react";
import "../assets/style/footer.css"

const Footer = () => {
  return (
    <footer className="footerContainer">
      
        
        <div className="footerIcons">
          <a className="icons1">
            <img src={require("../assets/img/instagram.png")} alt="" width="40px"/>
          </a>
          <a className="icons2">
          <img src={require("../assets/img/twitter.png")} alt="" width="40px" />
          </a>
          <a className="icons3">
          <img src={require("../assets/img/facebook.png")} alt="" width="40px"/>
          </a>
        </div>
        <div className="footerText">
        <p>
          © 2022 Crada, Inc. All rights reserved
        </p>
        </div>
     
    </footer>
  );
};

export default Footer;

