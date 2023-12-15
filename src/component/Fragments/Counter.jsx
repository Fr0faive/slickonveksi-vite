import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="flex items-center gap-3">
        <h1 className="text-gray-900">{this.state.count}</h1>
        <button
          className="bg-[#FFD7C3] p-3 text-gray-900"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
