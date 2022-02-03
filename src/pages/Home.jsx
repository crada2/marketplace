// import "../App.css";
import Hero from "../components/Hero";
import "../App.css";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../assets/style/home.css";

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero /> 
      <div className="grid-container">
        <div class="grid-item"><Card /></div>
        <div class="grid-item"><Card /></div>
        <div class="grid-item"><Card /></div>  
        <div class="grid-item"><Card /></div>
        <div class="grid-item"><Card /></div>  
        <div class="grid-item"><Card /></div>
        
      </div>
      <Footer />
        
      
    </div>
  );
};

export default Home;
