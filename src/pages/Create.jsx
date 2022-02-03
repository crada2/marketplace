import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/style/createForm.css";

const Create = () => {
  const navigate = useNavigate();

  const [artist, setArtist] = React.useState("");
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [image, setImage] = React.useState("");

  const handleChangeArtist = (event) => {
    setArtist(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeImage = (event) => {
    setImage(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    const create = { artist, name, description, price, image };
    fetch("http://localhost:3003/Create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(create),
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <form className="container-Formulario">
      <div className="container-image">
        <img src={require("../assets/img/img-view.png")} alt="" />
      </div>

      <div className="container-form">
        <div className="form">
          <label for="formGroupNFT">Artist</label>
          <input
            type="text"
            value={artist}
            onChange={handleChangeArtist}
            className="form-nft"
            placeholder="Artist"
          />
        </div>
        <div className="form">
          <label for="formGroupNFT">NFT Name</label>
          <input
            type="text"
            value={name}
            onChange={handleChangeName}
            className="form-nft"
            placeholder="Name"
          />
        </div>
        <div className="form">
          <label for="formGroupNFT">Description</label>
          <input
            type="text"
            value={description}
            onChange={handleChangeDescription}
            className="form-nft"
            placeholder="Description"
          />
        </div>
        <div className="form">
        <label for="formGroupNFT">Price</label>
        <input
          type="number"
          value={price}
          onChange={handleChangePrice}
          className="form-nft"
          placeholder="Price"
        />
        </div>
          <div className="form">
            <label for="formGroupNFT">Image</label>
            <input
              type="img"
              value={image}
              onChange={handleChangeImage}
              className="form-nft"
              placeholder="Image"
            />
          </div>
        <button type="button" className="button" onClick={handleClick}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Create;
