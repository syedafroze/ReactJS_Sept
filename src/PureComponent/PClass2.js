import React, { PureComponent } from 'react'

class PClass2 extends PureComponent {
  constructor(props) {
    super(props)

    
  }

  render() {
    console.log("rendering Class2")
    return (
      <h2>Count is {this.props.count}</h2>
    )
  }
}

export default PClass2