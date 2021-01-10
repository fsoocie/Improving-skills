import {DropResult} from 'react-beautiful-dnd'
import {IColumn, ITodosState} from '../store/ducks/todos/types/state'

export const getNewColumns = (result: DropResult, sourceColumn: IColumn, destColumn?: IColumn) => {
  const sourceIds = Array.from(sourceColumn.taskIds)
  const [removed] = sourceIds.splice(result.source.index, 1)
  sourceColumn.taskIds = sourceIds
  if (!destColumn) {
    destColumn = sourceColumn
  }
  const destIds = Array.from(destColumn.taskIds)
  destIds.splice(result.destination!.index, 0, removed)
  destColumn.taskIds = destIds
  if (sourceColumn) {
    return {newSourceColumn: sourceColumn, newDestColumn: destColumn}
  } return {newSourceColumn: destColumn}
}

export const getNewColumnsState = (oldColumnsState: ITodosState['columns'], newSourceColumn: IColumn, newDestColumn?: IColumn): ITodosState['columns'] => {
  const newColumnsState = [...oldColumnsState]
  const sourceIndex = oldColumnsState.findIndex((col: IColumn) => col._id === newSourceColumn._id)
  newColumnsState.splice(sourceIndex, 1, newSourceColumn)
  if (newDestColumn) {
    const destIndex = oldColumnsState.findIndex((col: IColumn) => col._id === newDestColumn._id)
    newColumnsState.splice(destIndex, 1, newDestColumn)
  }
  return newColumnsState
}
