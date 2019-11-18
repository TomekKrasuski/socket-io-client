import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: null
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { fullName } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={this.handleSubmit}>
          {fullName}
          <p><input type='text' name='fullName' onChange={this.handleInputChange} /></p>
          <p><button>Send</button></p>
        </form>
      </div>
    );
  }
}
export default App;