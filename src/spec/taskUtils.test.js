import TaskUtils from '../utils/taskUtils';


describe('isLocked()', () => {
  it('returns true when dependencies are not completed', () => {
    let task = {
      dependencyIds: [1, 2, 3]
    };
    let completedTaskIds  = [2, 3];
    let allTaskIds = [1,2,3];
    expect(TaskUtils.isLocked(task, completedTaskIds, allTaskIds)).toBe(true)
  });

  it('returns false when all dependencies are completed', () => {
    let task = {
      dependencyIds: [1, 2, 3]
    };
    let completedTaskIds  = [1, 2, 3];
    let allTaskIds = [1,2,3];
    expect(TaskUtils.isLocked(task, completedTaskIds, allTaskIds)).toBe(false)
  });

  it('ignores unloaded dependencies', () => {
    let task = {
      dependencyIds: [1, 2, 3, 100]
    };
    let completedTaskIds  = [1, 2, 3];
    let allTaskIds = [1,2,3];
    expect(TaskUtils.isLocked(task, completedTaskIds, allTaskIds)).toBe(false)
  })
});

describe('groupTasks()', () => {
  it('groups task by their group attributes', () => {
    let taskList = [
      {
        id: 1,
        group: 'a'
      },
      {
        id: 2,
        group: 'a'
      },
      {
        id: 3,
        group: 'b'
      },
      {
        id: 4,
        group: 'a'
      },
      {
        id: 5,
        group: 'a'
      }
    ];
    expect(TaskUtils.groupTasks(taskList)).toEqual(
        {
          'a': [
            {
              id: 1,
              group: 'a'
            },
            {
              id: 2,
              group: 'a'
            },
            {
              id: 4,
              group: 'a'
            },
            {
              id: 5,
              group: 'a'
            }
          ],
          'b': [
            {
              id: 3,
              group: 'b'
            }
          ]
        }
    )
  })
});
