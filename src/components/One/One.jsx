import React from "react";
import "./one.css";
import rectangle from "../../assets/Rectangle 3.png";
const One = () => {
  return (
    <div className="one">
      <div className="oneContainer">
        <h1>НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h1>
        <div className="oneArticle">
          <article>
            <img src={rectangle} alt="" />
            <div className="line"></div>
            <h1>Газпром Арена</h1>
            <p>
              Мы сделали самую красивую арену в Европе. Это открытие стало для
              нас прорывной точкой для разивтия на следующие десятилетия. Мы
              очень рады данному еву.
            </p>
          </article>
          <article>
            <img src={rectangle} alt="" />
            <div className="line"></div>
            <h1>Газпром Арена</h1>
            <p>
              Мы сделали самую красивую арену в Европе. Это открытие стало для
              нас прорывной точкой для разивтия на следующие десятилетия. Мы
              очень рады данному еву.
            </p>
          </article>
          <article>
            <img src={rectangle} alt="" />
            <div className="line"></div>
            <h1>Газпром Арена</h1>
            <p>
              Мы сделали самую красивую арену в Европе. Это открытие стало для
              нас прорывной точкой для разивтия на следующие десятилетия. Мы
              очень рады данному еву.
            </p>
          </article>
        </div>
      </div>
      <div className="oneEmail">
        <div className="oneEmailContainer">
          <div className="title">
            <h1>САМЫЕ УМНЫЕ ПРОЕКТЫ</h1>
            <h3>РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!</h3>
          </div>
          <div className="button">
            <button>
              <i class="bx bxs-envelope icon"></i>
              ВАШ ЗАПРОС
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;
