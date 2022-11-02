import React from "react";
import "./main.css";
import moon from "../../assets/moon.png";
import sunrise from "../../assets/sunrise.png";
import sun from "../../assets/sun.png";
import sunny from "../../assets/sunny.png";
import sunset from "../../assets/sunset.png";
import halfMoon from "../../assets/half-moon.png";
const Main = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <h1>РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В РОССИИ</h1>
        <p>стадионы, газопроводы, мосты, дамбы</p>
      </div>
      <div className="prayerTime">
        <div className="prayerTimes">
          <article>
            <img src={moon} alt="" />
            <h3>Bomdod</h3>
            <h1>5:30</h1>
          </article>
          <article>
            <img src={sunrise} alt="" />
            <h3>Quyosh</h3>
            <h1>5:30</h1>
          </article>
          <article>
            <img src={sun} alt="" />
            <h3>Peshin</h3>
            <h1>5:30</h1>
          </article>
          <article>
            <img src={sunny} alt="" />
            <h3>Asr</h3>
            <h1>5:30</h1>
          </article>
          <article>
            <img src={sunset} alt="" />
            <h3>Shom</h3>
            <h1>5:30</h1>
          </article>
          <article>
            <img src={halfMoon} alt="" />
            <h3>Xufton</h3>
            <h1>5:30</h1>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Main;
