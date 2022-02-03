import React from "react";
import "../assets/style/card.css";

const Card = () => {
  return (
    <div className="containerProduct">
      <div className="sectionUp">
        <img
          className="bgProduct"
          src={require("../assets/img/bg-product.png")}
          alt=""
        />
        <img
          className="imgProduct"
          src={require("../assets/img/robot-pink.png")}
          alt=""
        />

        <div className="search">
          <img
            className="imgSearch"
            src={require("../assets/img/search.png")}
            alt=""
          />
        </div>
      </div>

      <div className="sectionDown">
        <h2 className="title">Mika-light</h2>
        <p className="infoProduct">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic eum,
          laboriosam asperiores quidem dolor expedita. Harum vero at et
          voluptates voluptatibus? Sed, maiores. Reprehenderit cum enim maiores
          unde nisi?
        </p>

        <button type="button" className="btnBuy">
          Buy
        </button>
      </div>
    </div>
  );
};
export default Card;
