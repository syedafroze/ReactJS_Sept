import React, { Component } from "react";

class ClassA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.person,
    };
  }

  handleClick = () => {

    let updatedName = this.state.name.toUpperCase();
    this.setState({name:updatedName})

  };

  render() {
    return (
      <>
        <h2>{this.state.name} </h2>
        <button onClick={this.handleClick}>toUpperCase</button>
      </>
    );
  }
}

export default ClassA;
