import React from "react";
import Header from '../components/Header/Header'
import Main from "../components/Main/Main"
import One from "../components/One/One"
import Two from "../components/Two/Two"
import Three from "../components/Three/Three"
import Four from "../components/Four/Four"
import Five from "../components/Five/Five"
import Finaly from "../components/Finaly/Finaly"
import Footer from "../components/Footer/Footer"
import "./home.css";
const Home = () => {
  return (
    <div>
      <Header/>
      <Main />
      <One />
      <Two/>
      <Three/>
      <Four/>
      <Five/>
      <Finaly/>
      <Footer />
    </div>
  );
};

export default Home;
