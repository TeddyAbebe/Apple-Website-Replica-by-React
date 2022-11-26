import React, { Component } from "react";

import "./Components/CSS/style.css";

import Header from "./Apple/Header/Header";

import Footer from "./Apple/Footer/Footer";

import FirstSec from "./Apple/FirstSec/FirstSec";

import SecondSec from "./Apple/SecondSec/SecondSec";

import ThirdSec from "./Apple/ThirdSec/ThirdSec";

import FourthSec from "./Apple/FourthSec/FourthSec";

import FifthSec from "./Apple/FifthSec/FifthSec";

import SixthSec from "./Apple/SixthSec/SixthSec";

import Rating from "./Apple/Rating/Rating";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>

        <FirstSec></FirstSec>

        <Rating></Rating>

        <SecondSec></SecondSec>

        <ThirdSec></ThirdSec>

        <FourthSec></FourthSec>

        <FifthSec></FifthSec>

        <SixthSec></SixthSec>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
