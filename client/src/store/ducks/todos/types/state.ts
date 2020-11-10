export interface IColumn {
  id: string,
  title: string,
  taskIds: string[]
}

export interface ITask {
  id: string,
  content: string
}

export type IColumnsOrder = string[]

export interface ITodosState {
  columns: IColumn[],
  tasks: ITask[],
  columnsOrder: IColumnsOrder
}
