import "../App.css";
import "../assets/style/home.css";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    setLoading(false);
    axios.get("http://localhost:8080/tokens").then((res) => {
      setNfts(res.data);
    });
  }, [setLoading]);

  const renderNfts = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    return nfts.map(({ id, description, image, price, title, username }) => (
      <Card
        key={id}
        description={description}
        image={image}
        price={price}
        title={title}
        username={username}
      />
    ));
  };

  return (
    <div>
      <Hero />
      <div className="grid-container">{renderNfts()}</div>
    </div>
  );
};
export default Home;
