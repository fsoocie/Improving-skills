export default {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: 'task-1 text'
    },
    'task-2': {
      id: 'task-2',
      content: 'task-2 text'
    },
    'task-3': {
      id: 'task-3',
      content: 'task-3 text'
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Example Title1',
      taskIds: ['task-1', 'task-2', 'task-3']
    },
    'column-2': {
      id: 'column-2',
      title: 'Example Title2',
      taskIds: []
    },
    'column-3': {
      id: 'column-3',
      title: 'Example Title3',
      taskIds: []
    },
  },
  columnsOrder: ['column-1', 'column-2', 'column-3']
}
