import React, { PureComponent } from 'react'

class Counter extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      count:0,
    }
  }
  
handleCounter =()=>{
  this.setState({count:this.state.count+1})
}

  render() {
    console.log(this.props)
    return (
      <>
      {this.props.fun(this.state,this.handleCounter)}
      </>
    )
  }
}

export default Counter