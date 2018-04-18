import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import TaskList from './TaskList';
import Group from '../assets/Group.svg'

class TaskGroup extends Component {
  render() {
    var { name, completedTaskCount, totalTaskCount, ...props } = this.props;
    return (
          <Row key={name} {...props} className="border-bottom">
            <Col xs={1}>
              <img src={Group} />
            </Col>
            <Col xs={11} className="text-left">
              <h6 className="mt-2 mb-0">{name}</h6>
              <span className="mb-2 mt-0 task-count">{completedTaskCount} of {totalTaskCount} tasks complete</span>
            </Col>
            <hr/>
          </Row>
        )
  }
}

export default TaskGroup;
