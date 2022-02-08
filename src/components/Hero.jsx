import "../assets/style/hero.css";
import React from "react";

const Hero = () => {
  return (
    <main>
      <div className="container">
        <div className="text">
          <h1 className="h1Gradient">Collect digital art</h1>
          <p className="parrafo">
            <b>Buy and sell NFTs from the world's top artists</b>
          </p>
          <div className="btn-div">
            <button className="buttonGet">Create</button>
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
