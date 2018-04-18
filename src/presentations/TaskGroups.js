import React, { Component } from 'react';

class TaskGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGroup: null
    }
  }

  selectGroup(name) {
    this.setState({
      selectedGroup: name
    })
  }

  renderTaskGroups() {
    let groupNames = Object.keys(this.props.taskGroups);
    return groupNames.map((name) => {
      let taskCount = this.props.taskGroups[name].length;
      return (
          <div key={name} onClick={() => {this.selectGroup(name)}}>
            <h1>{name}</h1>
            <span>X of {taskCount} tasks complete</span>
          </div>
      )
    })
  }

  renderSelectedGroup() {
    if(!this.state.selectedGroup) { return; }
    return(
        <div>{this.state.selectedGroup}</div>
    )
  }

  render() {
    return(
      <div>
        <h1>Things To Do</h1>
        {this.renderTaskGroups()}
        {this.renderSelectedGroup()}
      </div>
    );
  }
}

export default TaskGroups
