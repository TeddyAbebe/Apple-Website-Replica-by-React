import React from "react";

import appletv from "../../Components/images/icons/apple-tv-logo.png";

import servant from "../../Components/images/icons/servant-logo.png";

function FifthSec() {
  return (
    <div>
      <section className="fifth-section-wrapper">
        <div className="left-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={appletv} alt="" />
            </div>
          </div>

          <div className="tvshow-logo-wrapper">
            <img src={servant} alt="" />
          </div>

          <div className="watch-more-wrapper">
            <a href="#"> Watch the trailer</a>
          </div>
        </div>

        <div className="right-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">AirPods Pro</div>
          </div>

          <div className="description-wrapper">
            Magic like you've never heard.
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

export default FifthSec;
