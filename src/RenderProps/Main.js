import React, { PureComponent } from "react";
import Hover from "./Hover";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
      <Counter fun={(state, handler) => (<ClickCounter state={state} handleCounter={handler}></ClickCounter> )}>  </Counter>

      <Counter fun={(state,handler)=><Hover state={state} handleCounter={handler}></Hover>}> </Counter>

   </> );
  }
}

export default Main;
