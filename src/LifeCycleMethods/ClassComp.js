import React from "react";

//update the count by 1 only when the props countValue is > 5
class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps");
  //   console.log(props, state);
  //   if (props.countValue > 5) {
  //     return {
  //       count: state.count + 1,
  //     };
  //   } else {
  //     return null;
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    if(nextProps.countValue==nextState.count){
      return false;//do not re render
    }
    else{
      return true;//re render 
    }
    
  }

  render() {
    console.log(" render comp1");
    return (
      <div>
        <h2>Count in ClassComp1 is {this.state.count}</h2>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps){
    
    console.log("componentDidUpdate");
    console.log(prevProps)
  }

  componentWillUnmount(){
    console.log("unMounted Comp1")
  }
}




export default ClassComp;
