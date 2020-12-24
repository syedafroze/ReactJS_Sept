import React from "react";

const UpdationFunc = (OriginalComponent) => {
  return class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increment = () => {
      this.setState({
        count: this.state.count + 1,
      });

    };

    render(){
      return <OriginalComponent state={this.state} incrementFunc={this.increment}></OriginalComponent>
    }

  };



};

export default UpdationFunc;

//renderProps
//contextApi
//