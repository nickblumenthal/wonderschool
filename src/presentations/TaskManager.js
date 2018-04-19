import React, { Component } from 'react';
import TaskGroup from './TaskGroup';
import Task from './Task';
import { Row, Col } from 'reactstrap';

import TaskUtils from '../utils/taskUtils'

class TaskManager extends Component {
  constructor(props) {
    super(props);
    let samplePayload = [
      {
        id: 1,
        group: "Purchases",
        task: "Go to the bank",
        dependencyIds: [],
        completedAt: null,
      },
      {
        id: 2,
        group: "Purchases",
        task: "Buy hammer",
        dependencyIds: [1],
        completedAt: null,
      },
      {
        id: 3,
        group: "Purchases",
        task: "Buy wood",
        dependencyIds: [1],
        completedAt: null,
      },
      {
        id: 4,
        group: "Purchases",
        task: "Buy nails",
        dependencyIds: [1],
        completedAt: null,
      },
      {
        id: 5,
        group: "Purchases",
        task: "Buy paint",
        dependencyIds: [1],
        completedAt: null,
      },
      {
        id: 6,
        group: "Build Airplane",
        task: "Hammer nails into wood",
        dependencyIds: [2, 3, 4],
        completedAt: null,
      },
      {
        id: 7,
        group: "Build Airplane",
        task: "Paint wings",
        dependencyIds: [6],
        completedAt: null,
      },
      {
        id: 8,
        group: "Build Airplane",
        task: "Have a snack",
        dependencyIds: [11],
        completedAt: null,
      }
    ]
    this.state = {
      tasks: samplePayload
    };
    this.allTaskIds = samplePayload.map((task) => task.id);
  }

  selectGroup(name) {
    this.setState({
      selectedGroup: name
    })
  }

  // Utilize presence of time in completedAt attribute to calculate which tasks are complete
  completedTaskIds() {
    let completed = [];
    this.state.tasks.forEach((task) => {
      if(!!task.completedAt) {
        completed.push(task.id)
      }
    });
    return completed;
  }

  toggleComplete(task) {
    // Do nothing if the task is locked by unmet dependencies
    let locked = TaskUtils.isLocked(task, this.completedTaskIds(), this.allTaskIds);
    if(locked) { return }

    // Toggle completedAt and then insert back into tasks array
    let completedAt = !task.completedAt ? Date.now() : null;
    let newTask = Object.assign({}, task, {completedAt: completedAt});
    let newTasks = this.state.tasks.map((oldTask) => {
      return oldTask.id == newTask.id ? newTask : oldTask;
    });

    this.setState({tasks: newTasks})
  }

  renderGroupings() {
    let groups = TaskUtils.groupTasks(this.state.tasks);
    let taskGroups = Object.keys(groups).map((name) => {
      let group = groups[name];
      return(
          <TaskGroup name={name}
                     key={name}
                     totalTaskCount={group.length}
                     completedTaskCount={group.filter((task) => this.completedTaskIds().includes(task.id)).length}
                     onClick={() => this.selectGroup(name)}/>
      )
    });

    return[
        <Row className="border-bottom no-gutters" key="title">
          <h5 className="mt-3 mb-3">Things To Do</h5>
        </Row>,
        taskGroups
    ]
  }

  renderTasks() {
    let selectedTasks = TaskUtils.groupTasks(this.state.tasks)[this.state.selectedGroup];
    return selectedTasks.map((task) => {
      return(
          <Task name={task.task}
                key={task.id}
                isLocked={TaskUtils.isLocked(task, this.completedTaskIds(), this.allTaskIds)}
                completedAt={task.completedAt}
                onClick={() => {this.toggleComplete(task)}}/>
      )
    })
  }

  renderTaskGroupTitle() {
    return (
        <Row className="border-bottom no-gutters align-items-center justify-content-between">
          <h5 className="mt-3 mb-3">{this.state.selectedGroup}</h5>
          <span className="all-groups" onClick={() => this.selectGroup(null)}>All Groups</span>
        </Row>
    )
  }

  renderSelectedGroup() {
    return [
          this.renderTaskGroupTitle(),
          this.renderTasks()
    ]
  }
  
  render() {
    return (
          <Row className="justify-content-center mt-4">
            <Col xs={4}>
              {this.state.selectedGroup ? this.renderSelectedGroup() : this.renderGroupings()}
            </Col>
          </Row>
        )
  }
}

export default TaskManager;
