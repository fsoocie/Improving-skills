import { LoadingStatus } from "../../../types";

export interface IColumn {
  _id: string,
  title: string,
  taskIds: string[]
}

export interface ITask {
  _id: string,
  content: string
}

export interface ITodosState {
  columns: IColumn[],
  tasks: ITask[],
  loadingStatus: LoadingStatus
}
