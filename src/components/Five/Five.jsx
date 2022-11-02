import React from "react";
import "./five.css";
const Five = () => {
  return (
    <div className="five">
      <div className="fiveContainer">
        <h2>отзывы о работе с нами</h2>
        <div className="fiveList">
          <div className="fiveItem">
            <article>
              <i class="bx bxs-quote-alt-left fiveIcons"></i>

              <p className="ficceParag">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров и форм
                шрифтов.
              </p>
            </article>
            <h4 className="fiveHfour">
              Иванов Иван, <mark> ООО “Газпром-Арена”</mark>
            </h4>
          </div>
          <div className="fiveItem">
            <article>
              <i class="bx bxs-quote-alt-left fiveIcons"></i>
              <p className="ficceParag">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров и форм
                шрифтов.
              </p>
            </article>
            <h4 className="fiveHfour">
              Иванов Иван, <mark> ООО “Газпром-Арена”</mark>
            </h4>
          </div>
          <div className="fiveItem">
            <article>
              <i class="bx bxs-quote-alt-left fiveIcons"></i>
              <p className="ficceParag">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров и форм
                шрифтов.
              </p>
            </article>
            <h4 className="fiveHfour">
              Иванов Иван, <mark> ООО “Газпром-Арена”</mark>
            </h4>
          </div>
        </div>
      </div>
      <div className="fiveContainers">
        <div className="container">
          <div className="left">
            <h1>ХОТИТЕ С НАМИ РАБОТАТЬ?</h1>
            <h4>ОСТАВЬТЕ ЗАЯВКУ И МЫ СВЯЖЕМСЯ С ВАМИ!</h4>
          </div>
          <div className="fiveButton">
            <button>
              <i class="bx bxs-envelope fiveIcon"></i>
              ВАШ ЗАПРОС
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
