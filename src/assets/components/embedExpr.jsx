import React from "react";

class Component extends React.Component {
  // State is a special property that holds data that may change over the lifetime of the component. It is an object that can be initialized in the constructor of a class component and can be updated using the setState method.
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <span>{this.state.count}</span>
        <h2>{this.format()}</h2>
        <button>Click</button>
      </div>
    );
  }

  // Another Method 
  format(){
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

}
export default Component;
