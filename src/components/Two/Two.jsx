import React from "react";
import "./two.css";
import img from "../../assets/hotel.png";
const Two = () => {
  return (
    <div className="two">
      <div className="twoContainer">
        <h1>ЧЕМ МЫ ЗАНИМАЕМСЯ?</h1>
        <div className="twoContainers">
          <div className="rowOne">
            <article>
              <img src={img} alt="" />
              <p>СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</p>
            </article>
            <article>
              <img src={img} alt="" />
              <p>СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</p>
            </article>
            <article>
              <img src={img} alt="" />
              <p>СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</p>
            </article>
          </div>
          <div className="rowTwo">
            <article>
              <img src={img} alt="" />
              <p>СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</p>
            </article>
            <article>
              <img src={img} alt="" />
              <p>СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</p>
            </article>
            <article>
              <img src={img} alt="" />
              <p>СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
