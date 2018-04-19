// Determines if a task's dependencies have been met
function isLocked(task, completedTaskIds, allTaskIds) {
  let locked = false;
  task.dependencyIds.forEach((dependencyId) => {
    if(!completedTaskIds.includes(dependencyId) && allTaskIds.includes(dependencyId)) {
      locked = true;
    }
  });
  return locked;
}

// Group tasks by the 'group' attribute
function groupTasks(taskList) {
  let groupedTasks = {};
  taskList.forEach((task) => {
    if(!groupedTasks[task.group]) {
      groupedTasks[task.group] = [];
    }
    groupedTasks[task.group].push(task);
  });
  return groupedTasks;
}

export default {
  isLocked: isLocked,
  groupTasks: groupTasks
}
