import React, { Component } from 'react';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskStatus: {}
    }
  }

  toggleTaskComplete(taskId) {
    let isComplete = this.state.taskStatus[taskId];
    let newTaskStatus = Object.assign({}, this.state.taskStatus, {[taskId]: !isComplete});
    this.setState({
      taskStatus: newTaskStatus
    })
  }

  isLocked(task) {
    let locked = false;
    task.dependencyIds.forEach((dependency) => {
      if(!this.state.taskStatus[dependency]) {
        locked = true;
      }
    });
    return locked;
  }

  renderTasks() {
    return this.props.tasks.map((task) => {
      let locked = this.isLocked(task);
      return (
          <div key={task.task} onClick={() => {this.toggleTaskComplete(task.id)}}>
            <div>{task.task}</div>
            <div>{this.state.taskStatus[task.id] ? 'true' : 'false'}</div>
            <div>{locked ? 'locked' : 'unlocked'}</div>
          </div>
      )
    })
  }

  render() {
    return(
        <div>
          {this.renderTasks()}
        </div>
    )
  }
}

export default TaskList;
