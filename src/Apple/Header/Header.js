import React from "react";

import logo from "../../Components/images/icons/logo.png";

import search from "../../Components/images/icons/search-icon.png";

import cart from "../../Components/images/icons/cart.png";

function Header() {
  return (
    <div>
      <header className="header-wrapper">
        <div className="header-container">
          <div className="header-links-wrapper">
            <ul>
              <li>
                <a href="#">
                  <img src={logo} alt="" />
                </a>
              </li>
              <li>
                <a href="#">Mac</a>
              </li>
              <li>
                <a href="#">ipad</a>
              </li>
              <li>
                <a href="#">iphone</a>
              </li>
              <li>
                <a href="#">watch</a>
              </li>
              <li>
                <a href="#">tv</a>
              </li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">
                  <img src={search} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={cart} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
