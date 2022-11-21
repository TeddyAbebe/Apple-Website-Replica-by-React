import React from "react";

import ipad from "../../Components/images/icons/new-ipad-logo.png";

function SixthSec() {
  return (
    <div>
      <section className="sixth-section-wrapper">
        <div className="left-wrapper">
          <div className="model">16-inch model</div>

          <div className="product-title-small">MacBook Pro</div>

          <div className="description-wrapper">The best for the brightest</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="#">Learn more</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="right-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={ipad} alt="" />
            </div>
          </div>

          <div className="description-wrapper">
            Like a computer. Unlike any computer.
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="#">Learn more</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SixthSec;
