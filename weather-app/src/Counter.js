import React from "react";

//if we want to state to a component , we should use ctor
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this); // you have to bind button and function
    this.handleIncrement = this.handleIncrement.bind(this); // you have to bind button and function
  }

  handleDecrement() {
    this.setState((currSate) => {
      return { count: currSate.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((currSate) => {
      return { count: currSate.count + 1 };
    });
  }

  render() {
    const date = new Date("june 21 2023");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()}[{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
