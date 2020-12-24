import React, { Component } from "react";

class RegClass extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("rendering Regular class");
    return <h2>Count in regular class {this.props.count}</h2>;
  }
}

export default RegClass;
