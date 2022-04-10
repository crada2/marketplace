import React from "react";
import "../assets/style/footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerText">
        <p>© 2022 Crada, Inc. All rights reserved</p>
      </div>
      <div className="footerIcons">
        <a href="https://www.instagram.com/?hl=es" className="icons1">
          <img
            src={require("../assets/img/instagram.png")}
            alt=""
            width="40px"
          />
        </a>
        <a href="https://twitter.com/?lang=es" className="icons2">
          <img src={require("../assets/img/twitter.png")} alt="" width="40px" />
        </a>
        <a href="https://es-es.facebook.com/" className="icons3">
          <img
            src={require("../assets/img/facebook.png")}
            alt=""
            width="40px"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
