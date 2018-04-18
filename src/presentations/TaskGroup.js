import React, { Component } from 'react';

import TaskList from './TaskList';

class TaskGroup extends Component {
  render() {
    var { name, completedTaskCount, totalTaskCount, ...props } = this.props;
    return (
          <div key={name} {...props}>
            <h1>{name}</h1>
            <span>X of {totalTaskCount} tasks complete</span>
          </div>
        )
  }
}

export default TaskGroup;
