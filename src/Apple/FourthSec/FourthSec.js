import React from "react";

import watch from "../../Components/images/icons/watch-series5-logo.png";

import applecard from "../../Components/images/icons/apple-card-logo.png";

function FourthSec() {
  return (
    <div>
      <section className="fourth-section-wrapper">
        <div className="left-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={watch} alt="" />
            </div>
          </div>
          <div className="description-wrapper">
            With the new Always-On Retina display. <br />
            You’v never seen a watch like this.
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
        <div className="right-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={applecard} alt="" />
            </div>
          </div>
          <div className="description-wrapper">
            Get 3% Daily Cash on purchases from Apple using Apple Card.
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

export default FourthSec;
