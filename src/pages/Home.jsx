import "../App.css";
import "../assets/style/home.css";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import api from "../api";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    setLoading(true);
    api.get("/sellers").then((sellers) => {
      const mappedNfts = sellers.flatMap(({ id, name, nfts }) =>
        nfts.map((nft) => ({ ...nft, seller: { id, name } }))
      );

      setNfts(mappedNfts);
      setLoading(false);
    });
  }, [setLoading]);

  const renderNfts = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    return nfts.map(({ id, description, image, price, title, seller }) => (
      <Card
        key={id}
        description={description}
        image={image}
        price={price}
        title={title}
        seller={seller}
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
