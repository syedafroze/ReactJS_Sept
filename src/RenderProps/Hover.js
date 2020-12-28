import React, { PureComponent } from "react";

class Hover extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.handleCounter}>
          This is Hover Count {this.props.state.count}
        </h2>
      </div>
    );
  }
}

export default Hover;
