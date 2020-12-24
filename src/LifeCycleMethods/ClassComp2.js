import React, { Component } from "react";
import ClassComp from "./ClassComp";
class ClassComp2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      flag:true,
    };
  }

  // handleCounter = () => {
  //   this.setState({
  //     count: this.state.count,
  //   });
  // };

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ count: this.state.count+1 });
  //   }, 3000);
  // }

handleUnmount=()=>{
  this.setState({
    flag:!this.state.flag
  })
}



  render() {
    return (
      <>
        <h2>Count is {this.state.count}</h2>
        {/* <button onClick={this.handleCounter}>Increment</button> */}
        {this.state.flag?<ClassComp countValue={this.state.count}></ClassComp> : null}
        <button onClick={this.handleUnmount}>{this.state.flag?"unMount":"Mount"}</button>
      </>
    );
  }
}

export default ClassComp2;
