import React, { Component } from 'react';
import TaskGroup from './TaskGroup';
import Task from './Task';
import { Container, Row, Col } from 'reactstrap';

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
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
    }
  }

  selectGroup(name) {
    this.setState({
      selectedGroup: name
    })
  }

  renderGroupings() {
    let groups = this.groupTasks(this.state.tasks);
    return Object.keys(groups).map((name) => {
      let group = groups[name]
      return(
          <TaskGroup name={name}
                     key={name}
                     totalTaskCount={group.length}
                     completedTaskCount={group.filter((task) => this.completedTaskIds().includes(task.id)).length}
                     onClick={() => this.selectGroup(name)}/>
      )
    })
  }

  groupTasks(taskList) {
    let groupedTasks = {};
    taskList.forEach((task) => {
      if(!groupedTasks[task.group]) {
        groupedTasks[task.group] = [];
      }
      groupedTasks[task.group].push(task);
    });
    return groupedTasks;
  }
  
  isLocked(task) {
    let locked = false;
    let completedIds = this.completedTaskIds();
    let loadedIds = this.state.tasks.map((task) => task.id);
    task.dependencyIds.forEach((dependencyId) => {
      if(!completedIds.includes(dependencyId) && loadedIds.includes(dependencyId)) {
        locked = true;
      }
    });
    return locked;
  }

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
    if(this.isLocked(task)) { return };
    let completedAt = !task.completedAt ? Date.now() : null;
    let newTask = Object.assign({}, task, {completedAt: completedAt});
    let newTasks = this.state.tasks.map((oldTask) => {
      return oldTask.id == newTask.id ? newTask : oldTask;
    });
    this.setState({tasks: newTasks})
  }

  renderTasks() {
    if(!this.state.selectedGroup) return;
    let selectedTasks = this.groupTasks(this.state.tasks)[this.state.selectedGroup]
    return selectedTasks.map((task) => {
      return(
          <Task name={task.task}
                isLocked={this.isLocked(task)}
                completedAt={task.completedAt}
                onClick={() => {this.toggleComplete(task)}}/>
      )
    })
  }
  
  render() {
    return (
          <Row>
            <Col>
              <Row>Things To Do</Row>
              {this.renderGroupings()}
            </Col>
            <Col>
              {this.renderTasks()}
            </Col>
          </Row>
        )
  }
}

export default TaskManager
