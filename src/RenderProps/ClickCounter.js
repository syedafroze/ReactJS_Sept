import React, { PureComponent } from "react";

class ClickCounter extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2> ClickCounter </h2>
        <h2>{this.props.state.count}</h2>
        <button onClick={this.props.handleCounter}>Increment</button>
      </div>
    );
  }
}

export default ClickCounter;
