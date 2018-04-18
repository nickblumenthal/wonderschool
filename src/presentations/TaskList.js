import React, { Component } from 'react';

class TaskList extends Component {
  constructor(props) {
    super(props)
  }

  renderTasks() {
    return this.props.tasks.map((task) => {
      return (
          <div key={task.task}>
            {task.task}
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
