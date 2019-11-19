import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class Formularz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      response: false,
      endpoint: 'http://10.8.1.45:4001'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.emit('incoming data', this.state.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            autofocus="true"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Formularz;
