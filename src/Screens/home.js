import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
      </div>
    );
  }
}

export default Home;
