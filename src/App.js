import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

import TaskManager from './presentations/TaskManager'

class App extends Component {
  render() {
    return (
      <Container className="App">
        <TaskManager/>
      </Container>
    );
  }
}

export default App;
