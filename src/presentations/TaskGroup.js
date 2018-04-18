import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import TaskList from './TaskList';
import Group from '../assets/Group.svg'

class TaskGroup extends Component {
  render() {
    var { name, completedTaskCount, totalTaskCount, ...props } = this.props;
    return (
          <Row key={name} {...props} className="border-bottom">
            <Col xs={1} className="d-flex align-items-center">
              <img src={Group} />
            </Col>
            <Col xs={11} className="text-left">
              <h6 className="mt-3 mb-0">{name}</h6>
              <div className="mb-3 mt-0 task-count">{completedTaskCount} of {totalTaskCount} tasks complete</div>
            </Col>
            <hr/>
          </Row>
        )
  }
}

export default TaskGroup;
