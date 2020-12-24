import React, { PureComponent } from "react";
import UpdationFunc from './HOComponent'
class Hover extends PureComponent {
  

  render() {
    return (
      <h2 onMouseOver={this.props.incrementFunc}>Count on Hover {this.props.state.count}</h2>
    );
  }
}

export default UpdationFunc(Hover);
