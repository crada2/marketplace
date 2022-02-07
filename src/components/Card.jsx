import React from "react";
import "../assets/style/card.css";

const Card = ({description, image, price, title, username}) => {
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
          src={image}
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
      <p>{username}</p>
      <div className="sectionDown">
        <h2 className="title">{title}</h2>
        <p className="infoProduct">
          {description}
        </p>

        <button type="button" className="btnBuy">
          {price}
        </button>
      </div>
    </div>
  );
};
export default Card;
