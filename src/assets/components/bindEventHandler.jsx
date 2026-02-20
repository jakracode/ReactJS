import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class BindHandler extends React.Component {
  state = {
    count: 0,
  };

  // constructor(){
  //     // We need to call a super class in this function!
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement(){
  //     console.log('Button Clicked', this);
  //     // In JSX, this return the reference of an object
  // }

  // A cleaner way
  handleIncrement = () => {
    console.log("Button Clicked", this);
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Click
        </button>
      </div>
    );
  }
}

export default BindHandler;

/* 
In React, binding event handlers is a concept primarily tied to how the this keyword works in JavaScript, specifically within Class Components.

When you pass a function as an event handler in React (like an onClick event), the function loses its context (its this value). If you try to access this.state or this.setState inside that function, you will get an error saying this is undefined.

Here is a breakdown of why this happens and how to fix it, along with how modern React handles it.
*/
