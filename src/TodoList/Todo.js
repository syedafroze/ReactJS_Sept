import React, { PureComponent } from 'react'

class Todo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      list:["C"]
    }
    this.text ='';
  }

  handleChange=(event)=>{
      this.text = event.target.value;//syed
  }

  handleClick=()=>{
    this.setState({
      list:[...this.state.list,this.text]
    })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Add</button>
        <ul>{this.state.list.map((value,index)=><li key={index}>{value}</li>)}</ul>
      </div>
    )
  }
}

export default Todo