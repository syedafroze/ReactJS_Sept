import React, { PureComponent } from "react";

class Fetch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  handleGet = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ list: data }));
  };

  handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      header: { "content-type": "application/json" },
      body: JSON.stringify({ name: "syed", age: "39" }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  render() {
    console.log(this.state.list);
    return (
      <div>
        <button onClick={this.handleGet}>Get Data</button>
        <ul>
          {this.state.list.map((value, index) => (
            <li key={index}>{value.name}</li>
          ))}
        </ul>
        <button onClick={this.handlePost}>Post Data</button>
      </div>
    );
  }
}

export default Fetch;
