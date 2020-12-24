import React, { PureComponent } from "react";

class ChildClass extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <button onClick={this.props.incrementFunc}>Increment</button>;
  }
}
export default ChildClass;
