export default {
  tasks: [
    {
      id: 'task-1',
      content: 'task-1 text'
    },
    {
      id: 'task-2',
      content: 'task-2 text'
    },
    {
      id: 'task-3',
      content: 'task-3 text'
    }
  ],
  columns: [
    {
      id: 'column-1',
      title: 'Example Title1',
      taskIds: ['task-1', 'task-2', 'task-3']
    },
    {
      id: 'column-2',
      title: 'Example Title2',
      taskIds: []
    },
    {
      id: 'column-3',
      title: 'Example Title3',
      taskIds: []
    }
  ],
  columnsOrder: ['column-1', 'column-2', 'column-3']
}
