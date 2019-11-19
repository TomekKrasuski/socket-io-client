import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import Formularz from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: 'http://10.8.1.45:4001'
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('outgoing data', data => this.setState({ response: data.num }));
  }

  render() {
    const { response } = this.state;
    if (response != null && response != '') {
      return (
        <div>
          <Formularz></Formularz>
          <div style={{ textAlign: 'center' }}>Treść: {response}</div>
        </div>
      );
    }
    {
      return (
        <div>
          <Formularz></Formularz>
        </div>
      );
    }
  }
}

export default App;
