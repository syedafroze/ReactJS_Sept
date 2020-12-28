import React, { PureComponent } from "react";
import { Consumer } from "./context";
class A1Class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
   
  }

  render() {
   
    return (
      <>
        <h2>Class A1</h2>
        {/* <Consumer>{(name)=><h2>{name}</h2>}</Consumer> */}
        <h2>{this.context}</h2>
      </>
    );
  }
}

A1Class.contextType=Consumer ;
export default A1Class;
