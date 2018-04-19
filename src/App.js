import React, { Component } from 'react';
import './App.css';
import { Container   } from 'reactstrap';

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
