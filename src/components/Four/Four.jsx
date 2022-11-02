import React from "react";
import "./four.css";
import image from "../../assets/image.png";
const Four = () => {
  return (
    <div className="four">
      <div className="fourContainer">
        <h2>ОТВЕТЫ НА ВОПРОСЫ</h2>
        <div className="fourTitle">
          <article>
            <button>
              <i class='bx bx-play icons' ></i>
              РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?
            </button>
            <p style={{ display: "none" }}>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов.{" "}
            </p>
          </article>
          <article>
            <button>
            <i class='bx bx-play icons' ></i>
              РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?
            </button>
            <p style={{ display: "none" }}>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов.{" "}
            </p>
          </article>
          <article>
            <button>
            <i class='bx bx-play icons' ></i>
              РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?
            </button>
            <p style={{ display: "none" }}>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов.{" "}
            </p>
          </article>
          <article>
            <button>
            <i class='bx bx-play icons' ></i>
              РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?
            </button>
            <p style={{ display: "none" }}>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов.{" "}
            </p>
          </article>
        </div>
      </div>
      <div className="fourContainers">
        <div className="cotainer">
          <h2>наши партнеры</h2>
          <div className="fourImage">
            <img className="image" src={image} alt="" />
            <img className="image" src={image} alt="" />
            <img className="image" src={image} alt="" />
            <img className="image" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;
