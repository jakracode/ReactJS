import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class RenderingLst extends React.Component {
  states = {
    count: 1,
    tags: ["tag1", "tag2", "tag3", "tag4"],
  };

  render() {
    return (
      <div>
        <h1>{this.states.count}</h1>
        <ul>
            {/* There has no loop method in Jsx, we use map() method instead. */}
          {this.states.tags.map(tag => <li>{tag}</li>)}
        </ul>
      </div>
    );
  }
}

export default RenderingLst;
