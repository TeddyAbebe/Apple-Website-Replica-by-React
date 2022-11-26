import React, { Component } from "react";

export default class Rating extends Component {
  constructor() {
    super();
    this.state = {
      value: 5,
    };
  }

  increment = () => {
    // this.setState((state) => {
    //   return {
    //     value: state.value + 1,
    //   };
    // });

    this.setState((state) => {
      return { value: state.value + 1 };
    });
  };

  decrement = () => {
    this.setState((state) => {
      return {
        value: state.value - 1,
      };
    });
  };

  render() {
    // Conditional rendering in React
    let initialText = "Average rating:";
    let changedText = "Your rate to this product is :";
    let displayText = "";

    let counter = 1;

    if (this.state.value !== 5) {
      counter = counter + 1;
    }

    if (counter >= 2) {
      displayText = changedText;
    } else {
      displayText = initialText;
    }

    return (
      <div className="rating-wrapper">
        <h2>Please rate this mac out of 10</h2>
        <div>
          <div className="cont">
            <button className="positive" onClick={this.increment}>
              Rate UP
            </button>

            <button className="negative" onClick={this.decrement}>
              Rate Down
            </button>
          </div>

          <div className="rating-result">
            {displayText}
            {this.state.value}
          </div>
        </div>
      </div>
    );
  }
}
