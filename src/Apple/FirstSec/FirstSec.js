import React from "react";

import mac from "../../Components/images/home/mac-laptop.jpg";

function FirstSec() {
  return (
    <div>
      <section className="first-section-wrapper">
        <div className="internal-wrapper">
          <div className="model">16-inch model</div>

          <div className="product-title">MacBoook Pro</div>

          <div className="brief-description">The best for the brightest</div>

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

          <div className="main-image-wrapper">
            <img src={mac} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FirstSec;
