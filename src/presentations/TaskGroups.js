import React, { Component } from 'react';

class TaskGroups extends Component {
  constructor(props) {
    super(props);
  }

  renderTaskGroups() {
    let groupNames = Object.keys(this.props.taskGroups);
    return groupNames.map((name) => {
      return (
          <div>{name}</div>
      )
    })
  }

  render() {
    return(
      <div>
        <h1>Things To Do</h1>
        {this.renderTaskGroups()}
      </div>
    );
  }
}

export default TaskGroups
