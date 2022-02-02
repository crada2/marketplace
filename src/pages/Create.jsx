import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/style/createForm.css"

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
    <form>
<div className="form-group">
</div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Artist</label>
          <input
            type="text"
            value={artist}
            onChange={handleChangeArtist}
            className="form-control"
            placeholder="Artist"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">NFT Name</label>
          <input
            type="text"
            value={name}
            onChange={handleChangeName}
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Description</label>
          <input
            type="text"
            value={description}
            onChange={handleChangeDescription}
            className="form-control"
            placeholder="Description"
          />
        </div>
          <label for="formGroupExampleInput2">Price</label>
          <input
            type="number"
            value={handleChangePrice}
            onChange={handleChangePrice}
            className="form-control"
            placeholder="Price"
          />
      <div className="container">
        <div className="form-group">
          <label for="formGroupExampleInput2">Image</label>
          <input
            type="text"
            value={image}
            onChange={handleChangeImage}
            className="form-control"
            placeholder="Image"
          />
        </div>
        <button type="button" className="btn btn-danger" onClick={handleClick}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Create;