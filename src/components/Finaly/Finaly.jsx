import React from "react";
import './finaly.css'
const Finaly = () => {
  return (
    <div className="finaly">
      <div className="finalyContainer">
        <h2>КОНТАКТЫ</h2>
        <div className="container">
          <article>
            <div className="finalyItem">
              <i class="bx bxs-location-plus finalyIcon"></i>
              <p className="finalyParag">АДРЕС:</p>
            </div>
            <h3 className="finalyHthree">
              НЕВСКИЙ ПРОСПЕКТ 140,
              <br /> ОФИС 140-142
            </h3>
          </article>
          <article>
            <div className="finalyItem">
              <i class="bx bxs-phone finalyIcon"></i>
              <p className="finalyParag">ТЕЛЕФОН:</p>
            </div>
            <h3 className="finalyHthree">
              8 (812) 111-22-33 <br />8 (812) 111-22-33
            </h3>
          </article>
          <article>
            <div className="finalyItem">
              <i class="bx bxs-time finalyIcon"></i>
              <p className="finalyParag">ВРЕМЯ РАБОТЫ:</p>
            </div>
            <h3 className="finalyHthree">
              ПН-СБ <br /> 10:00 - 20:00
            </h3>
          </article>
          <article>
            <div className="finalyItem">
              <i class="bx bxs-envelope finalyIcon"></i>
              <p className="finalyParag">E-MAIL:</p>
            </div>
            <h3 className="finalyHthree finalyEmail">INFO@VIP.RU</h3>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Finaly;
