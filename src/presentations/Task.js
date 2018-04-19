import React, { Component } from 'react';
import Completed from '../assets/Completed.svg'
import Incomplete from '../assets/Incomplete.svg'
import Locked from '../assets/Locked.svg'
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

class Task extends Component {
  constructor(props) {
    super(props)
  }

  imageSrc() {
    if(this.props.isLocked) {
      return Locked
    } else if(!this.props.completedAt) {
      return Incomplete 
    } else {
      return Completed
    }
  }
  
  assignClasses() {
    if(this.props.isLocked) {
      return 'locked'
    } else if(!this.props.completedAt) {
      return 'incomplete'
    } else {
      return 'completed'
    }
  }
  
  render() {
    var { name, onClick } = this.props;
    return (
        <Row onClick={onClick} className="border-bottom task-row no-gutters task">
          <Col xs={2} className="d-flex align-items-center">
            <img src={this.imageSrc()} />
          </Col>
          <Col xs={10} className="d-flex text-left align-items-center">
            <span className={this.assignClasses()}>{name}</span>
          </Col>
        </Row>
    )
  }
}

Task.propTypes = {
  completedAt: PropTypes.number,
  isLocked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Task;
