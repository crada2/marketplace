import React from "react";
import "../assets/style/view.css";

const View = () => {
  return (
    <div className="container-view">
      <div className="view-img">
        <img src={require("../assets/img/img-view.png")} alt="" />
      </div>
      <div className="card-view">
        <div className="card-text">
          <div className="card-title">
            <h1>Pink Robot</h1>
          </div>
          <p>
            <b>Created by:</b> @crada
          </p>
          <p>
            <b>Description:</b> And if they ever ask about me, tell them I was
            more than just a great set of b*obs. I was also an incredible pair
            of legs. And tell them... tell them that I never turned down a
            friend. I... never turned down a stranger for that matter.
          </p>
          <p>
            <b>Buy for:</b> 100€
          </p>
        </div>
        <div className="card-img">
          <img src={require("../assets/img/robot-pink.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default View;
