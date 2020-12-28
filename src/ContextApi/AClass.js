import React, { PureComponent } from "react";
import A1Class from "./A1Class";
import A2Class from "./A2Class";
class AClass extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.person}
        <A1Class username={this.props.person}></A1Class>
        <A2Class ></A2Class>
      </div>
    );
  }
}

export default AClass;
