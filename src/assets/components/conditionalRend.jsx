import React from "react";

class ConditionRend extends React.Component {
  state = {
    count: 1,
    // tags: ["tag1", "tag2", "tag3", "tag4"],
    tags: [],
  };


// Create an if else method in JS function and call to use at JSX
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
}

render() {
    return <div>
        {/* There has no if else method in jsx */}
        {this.renderTags()}

        {/* Another way */}
        { this.state.tags.length === 0 && 'There are no tags!' }
    </div>;
  }
}

export default ConditionRend;
