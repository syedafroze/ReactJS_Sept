import React, { PureComponent } from 'react'

class Form2 extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
    this.inputRef= React.createRef()
  }

  componentDidMount(){
    console.log(this.inputRef)
    this.inputRef.current.focus()
  }

handleSubmit=()=>{
  alert(this.inputRef.current.value)
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label><br></br>
        <input type="text" ref={this.inputRef} defaultValue ="syed"></input>
        <input type="submit" ></input>
      </form>
    )
  }
}

export default Form2


//Todo 
