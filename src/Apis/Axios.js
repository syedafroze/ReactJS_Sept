import React, { PureComponent } from "react";
import axios from "axios";
class Axios extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }
  handleGet = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => this.setState({ list: response.data }));
  };

  handlePost=()=>{
    axios.post('https://jsonplaceholder.typicode.com/users',{"name":"syed","age":"23"})
    .then((response)=>console.log(response))
  }
  /*
response={
  config:'',
  data:[{},{},{}]
}
  */

  render() {
    return (
      <div>
        <button onClick={this.handleGet}> Get Data </button>
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

export default Axios;
