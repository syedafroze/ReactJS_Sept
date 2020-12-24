import React, { PureComponent } from "react";
import ChildClass from './ChildClass';
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
         <h2>
           Count in Parent Class {this.state.count}
         </h2>
        
        <ChildClass incrementFunc= {this.incrementCount}></ChildClass>
      </>
    );
  }
}

export default ParentClass;
