import {DropResult} from 'react-beautiful-dnd'
import {IColumn, ITodosState} from '../store/ducks/todos/types/state'

export const getNewColumns = (sourceColumn: IColumn, destColumn: IColumn, result: DropResult) => {
  const sourceIds = Array.from(sourceColumn.taskIds)
  const destIds = Array.from(destColumn.taskIds)
  const [removed] = sourceIds.splice(result.source.index, 1)
  destIds.splice(result.destination!.index, 0, removed)
  sourceColumn.taskIds = sourceIds
  destColumn.taskIds = destIds
  return {newSourceColumn: sourceColumn, newDestColumn: destColumn}
}

export const getNewColumnsState = (oldColumnsState: ITodosState['columns'], newSourceColumn: IColumn, newDestColumn: IColumn): ITodosState['columns'] => {
  const newColumnsState = [...oldColumnsState]
  const sourceIndex = oldColumnsState.findIndex((col: any) => col.id === newSourceColumn.id)
  const destIndex = oldColumnsState.findIndex((col: any) => col.id === newDestColumn.id)
  newColumnsState.splice(sourceIndex, 1, newSourceColumn)
  newColumnsState.splice(destIndex, 1, newDestColumn)
  return newColumnsState
}
