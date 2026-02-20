import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class UpdateState extends React.Component{

    // Make update on count property
state    = {
    count: 0,
  };

  handleIncrement = () => {
    // console.log("Button Clicked", this);
    // this.state.count++; This not gonna work like in JS
    this.setState({ count: this.state.count + 1 })
  };

  render() {
    let classes = "badge m-2";
        classes += this.state.count === 0 ? " bg-warning" : " bg-primary";
    return (
      <div>
        <span className={classes}>{this.state.count}</span>
        <button
          onClick={this.handleIncrement} // do not use handleIncrement(), it cause auto click
          className="btn btn-secondary btn-sm"
        >
          Click
        </button>
      </div>
    );
  }
}

export default UpdateState;