import React from "react";

class ClassComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <>
        <h1>Hi {this.props.person}</h1>
        <h2>This is created using Class</h2>
      </>
    );
  }
}

export default ClassComp;
//constructor ,render(),
