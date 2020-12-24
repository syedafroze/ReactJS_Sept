import React, { Component } from 'react';
import PClass2 from './PClass2';
import RegClass from './RegClass';
import Func from './Func'
class PClass1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count:0
    }
  }

  componentDidMount(){
    setInterval(()=>this.setState({count:this.state.count}),3000)
  }
  render() {
    return (
      <>
       <PClass2 count={this.state.count}></PClass2>
       <RegClass count={this.state.count}></RegClass>
       <Func></Func>
       </>
    )
  }
}

export default PClass1