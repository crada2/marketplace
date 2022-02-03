import "../assets/style/hero.css";
import React from "react";

const Hero = () => {
  return (
    <main>
      <div className="container">
        
        <div className="text">
          <h1 className="h1Gradient">Financial Mika-Shop NFT Rules</h1>
          <p className="parrafo">
            We draw your attention to a few simple rules for working with an
            online bank and a mobile application
          </p>
          <div className="btn-div">
            <button className="buttonGet">Get Started</button>
          </div>
        </div>
        <div className="img-div">
          <img src={require("../assets/img/img-hero.png")} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
