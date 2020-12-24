import React, { PureComponent } from "react";
import ChildClass from "./ChildClass";
class ParentClass extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <ChildClass countValue={this.state.count}></ChildClass>
        <button onClick={this.incrementCount}>Increment</button>
      </>
    );
  }
}

export default ParentClass;
