import React, { Component } from 'react';
import Completed from '../assets/Completed.svg'
import Incomplete from '../assets/Incomplete.svg'
import Locked from '../assets/Locked.svg'
import { Container, Row, Col } from 'reactstrap';

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


  render() {
    var { name, ...props } = this.props;
    return (
        <Row {...props}>
          <img src={this.imageSrc()} /> {name}
        </Row>
    )
  }
}

export default Task;
