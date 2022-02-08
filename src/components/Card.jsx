import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/card.css";

const Card = ({ description, image, price, title, username }) => {
  return (
    <div className="containerProduct">
      <div className="sectionUp">
        <img
          className="bgProduct"
          src={require("../assets/img/bg-product.png")}
          alt=""
        />
        <img className="imgProduct" src={image} alt="" data-testid="image" />
      </div>
      <div className="search">
        <Link href="#" to="view">
          <img
            className="imgSearch"
            src={require("../assets/img/search.png")}
            alt=""
          />
        </Link>
      </div>
      <div className="sectionDown">
        <h2 className="title">{title}</h2>
        <p>
          <b>User:</b> {username}
        </p>
        <p className="infoProduct">{description}</p>
        <div className="boton">
          <button type="button" className="btnBuy">
            Buy for: {price}€
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
