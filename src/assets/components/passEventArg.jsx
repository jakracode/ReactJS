import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class PassingEvent extends React.Component{
state    = {
    count: 0,
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 })
  };

//   doHandleIncrement = () => {
//     this.handleIncrement({ id: 1 }) // The result will show argument id: 1 in the console
//   }

  render() {
    let classes = "badge m-2";
        classes += this.state.count === 0 ? " bg-warning" : " bg-primary";
    return (
      <div>
        <span className={classes}>{this.state.count}</span>
        <button 
        //   onClick={this.doHandleIncrement} // Use doHandleIncrement
        //   Another way to use without declare the doHandleIncrement function
        onClick={ () => this.handleIncrement({ id: 1}) }
          className="btn btn-secondary btn-sm"
        >
          Click
        </button>
      </div>
    );
  }
}

export default PassingEvent;