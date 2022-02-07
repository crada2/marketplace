
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import "../App.css";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../assets/style/home.css";
import axios from 'axios';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    setLoading(false);
    axios.get('http://localhost:8080/tokens')
    
    .then((res) => {
      setNfts(res.data) //setNfts(res.data)
    })
    
}, [setLoading]);

  const renderNfts = ()=>{
    if (loading) {
      return <p>Loading...</p>;
  }

  return nfts.map(({ id, description, image, price, title, username})=> (
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
      <Header/>
      <Hero /> 
      <div className="grid-container">
        {renderNfts()}
      </div>
      <Footer />
    </div>
  );
//);

}
export default Home;
