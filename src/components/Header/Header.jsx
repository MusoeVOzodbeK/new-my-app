import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerLogo">regeregg</div>
        <div className="headerMenuBar">
          <button className="headerButton">
            <i class="bx bx-menu"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
