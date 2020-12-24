import React, { PureComponent } from "react";

class ErrClass extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
    };
  }

  static getDerivedStateFromError(error) {
    if (error) {
      return { flag: true };
    }
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }
  
  render() {
    if (this.state.flag) {
      return <h2>Something went wrong</h2>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrClass;
