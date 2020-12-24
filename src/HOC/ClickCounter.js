import React, { PureComponent } from "react";
import UpdationFunc from "./HOComponent";
class ClickCounter extends PureComponent {
  render() {
    return (
      <div>
        <h2>Count on Click {this.props.state.count}</h2>
        <button onClick={this.props.incrementFunc}>Inc</button>
      </div>
    );
  }
}

export default UpdationFunc(ClickCounter);
