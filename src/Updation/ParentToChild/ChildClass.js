import React, { PureComponent } from "react";

class ChildClass extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <h2>Count in Child Class {this.props.countValue}</h2>
  }
}
export default ChildClass;
