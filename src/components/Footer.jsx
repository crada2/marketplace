import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="navbar navbar-light">
      <div className="container-fluid d-flex justify-content-between">
        <p className="text-light m-2 p-2">
          © 2021 Crada, Inc. All rights reserved
        </p>
        <div className="d-flex flex-row-reverse">
          <a className="p-3 btn-outline-danger rounded-circle">
            <BsFacebook />
          </a>
          <a className="p-3 btn-outline-danger rounded-circle">
            <BsInstagram />
          </a>
          <a className="p-3 btn-outline-danger rounded-circle">
            <BsTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

