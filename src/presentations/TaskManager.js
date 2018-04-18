import React, { Component } from 'react';
import TaskGroups from './TaskGroups';

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
  
  render() {
    return (
          <div>
            Test
            <TaskGroups taskGroups={this.groupTasks(this.state.tasks)} />
          </div>
        )
  }
}

export default TaskManager
