import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Group from '../assets/Group.svg'

class TaskGroup extends Component {
  render() {
    var { name, completedTaskCount, totalTaskCount, ...props } = this.props;
    return (
          <Row key={name} {...props} className="border-bottom task-row no-gutters">
            <Col xs={1} className="d-flex align-items-center">
              <img src={Group} alt=""/>
            </Col>
            <Col xs={11} className="text-left pl-1">
              <h6 className="mt-3 mb-0">{name}</h6>
              <div className="mb-3 mt-0 task-count">{completedTaskCount} of {totalTaskCount} tasks complete</div>
            </Col>
            <hr/>
          </Row>
        )
  }
}

TaskGroup.propTypes = {
  completedTaskCount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  totalTaskCount: PropTypes.number.isRequired
};

export default TaskGroup;
