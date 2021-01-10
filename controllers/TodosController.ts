import express from 'express'
import TodosModel from '../models/Todos'
import {IDocumentUser} from '../models/User'

class TodosCtrl {
  async createTodos(req: express.Request, res: express.Response): Promise<void> {
    try {
      const owner = req.user as IDocumentUser
      const data = {
        tasks: [],
        columns: [],
        owner: owner._id
      }
      await TodosModel.create(data)
      res.status(200).json({status: 'success', data})
    } catch (error) {
      res.status(500).json({status: 'error', message: error})
    }
  }

  async updateColumns(req: express.Request, res: express.Response): Promise<void> {
    try {
      const owner = req.user as IDocumentUser
      const payload = {
        columns: req.body.columns,
        owner: owner._id
      }
      const todos = await TodosModel.findOne({owner: payload.owner})

      if (todos) {
        todos.columns = payload.columns
        await todos.save()
        res.status(200).json({status: 'success', payload})
        return;
      }

      res.status(404).json({status: 'error', message: 'Todos not found'})
    } catch (error) {
      res.status(500).json({status: 'error', message: error})
    }
  }
  async getTodos(req: express.Request, res: express.Response): Promise<void> {
    try {
      const owner = req.user as IDocumentUser
      const todos = await TodosModel.findOne({owner: owner._id}).populate('owner').exec()
      if (!todos) {
        res.status(404).json({status: 'error', message: 'Todos not found'})
      }
      res.status(200).json({status: 'success', data: todos})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }
  async addTask(req: express.Request, res: express.Response): Promise<void> {
    try {
      const payload = {
        task: req.body.task,
        columnIndex: req.body.columnIndex,
        owner: req.user as IDocumentUser
      }
      const todos = await TodosModel.findOne({owner: payload.owner._id}).populate('owner').exec()
      if (todos) {
        const column = todos.columns[payload.columnIndex]
        column.taskIds.push(payload.task._id)
        todos.columns.splice(payload.columnIndex, 1, column)
        todos.tasks.push(payload.task)
        await todos.save()
        res.status(200).json({status: 'success', data: todos})
        return;
      }
      res.status(404).json({status: 'error', message: 'Todos not found'})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }

  async addColumn(req: express.Request, res: express.Response): Promise<void> {
    try {
      const payload = {
        column: req.body.column,
        owner: req.user as IDocumentUser
      }
      const todos = await TodosModel.findOne({owner: payload.owner._id}).populate('owner').exec()
      if (todos) {
        todos.columns.push(payload.column)
        await todos.save()
        res.status(200).json({status: 'success', data: todos})
        return;
      }
      res.status(404).json({status: 'error', message: 'Todos not found'})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }

  async updateTitle(req: express.Request, res: express.Response): Promise<void> {
    try {
      const payload = {
        title: req.body.title,
        columnIndex: req.body.columnIndex,
        owner: req.user as IDocumentUser
      }
      const todos = await TodosModel.findOne({owner: payload.owner._id}).populate('owner').exec()
      if (todos) {
        const column = todos.columns[payload.columnIndex]
        column.title = payload.title
        todos.columns.splice(payload.columnIndex, 1, column)
        await todos.save()
        res.status(200).json({status: 'success', data: todos})
        return;
      }
      res.status(404).json({status: 'error', message: 'Todos not found'})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }

  async clearColumn(req: express.Request, res: express.Response): Promise<void> {
    try {
      const payload = {
        columnIndex: req.body.columnIndex,
        owner: req.user as IDocumentUser
      }
      const todos = await TodosModel.findOne({owner: payload.owner._id}).populate('owner').exec()
      if (todos) {
        todos.columns[payload.columnIndex].taskIds.forEach(taskId => {
          todos.tasks = todos.tasks.filter(task => task._id !== taskId)
        })
        const newCol = {...todos.columns[payload.columnIndex]}
        newCol.taskIds = []
        todos.columns.splice(payload.columnIndex, 1, newCol)
        await todos.save()
        res.status(200).json({status: 'success', data: todos})
        return;
      }
      res.status(404).json({status: 'error', message: 'Todos not found'})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }

  async updateTask(req: express.Request, res: express.Response): Promise<void> {
    try {
      const payload = {
        _id: req.body._id,
        content: req.body.content,
        owner: req.user as IDocumentUser
      }
      const todos = await TodosModel.findOne({owner: payload.owner._id}).populate('owner').exec()
      if (todos) {
        const taskIndex = todos.tasks.findIndex(task => task._id === payload._id)
        const task = todos.tasks[taskIndex]
        task.content = payload.content
        todos.tasks.splice(taskIndex, 1, task)
        await todos.save()
        res.status(200).json({status: 'success', data: todos})
        return;
      }
      res.status(404).json({status: 'error', message: 'Todos not found'})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }

  async deleteColumn(req: express.Request, res: express.Response): Promise<void> {
    try {
      const payload = {
        columnIndex: Number(req.params.columnIndex),
        owner: req.user as IDocumentUser
      }
      const todos = await TodosModel.findOne({owner: payload.owner._id}).populate('owner').exec()
      if (todos) {
        todos.columns[payload.columnIndex].taskIds.forEach(taskId => {
          todos.tasks = todos.tasks.filter(task => task._id !== taskId)
        })
        todos.columns.splice(payload.columnIndex, 1)
        await todos.save()
        res.status(200).json({status: 'success', data: todos})
        return;
      }
      res.status(404).json({status: 'error', message: 'Todos not found'})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }

  async deleteTask(req: express.Request, res: express.Response): Promise<void> {
    try {
      const payload = {
        columnIndex: req.body.columnIndex,
        _id: req.body._id,
        owner: req.user as IDocumentUser
      }
      const todos = await TodosModel.findOne({owner: payload.owner._id}).populate('owner').exec()
      if (todos) {
        todos.tasks = todos.tasks.filter(task => task._id !== payload._id)
        const taskIds = todos.columns[payload.columnIndex].taskIds.filter(taskId => taskId !== payload._id)
        const newColumn = {...todos.columns[payload.columnIndex]}
        newColumn.taskIds = taskIds
        todos.columns.splice(payload.columnIndex, 1, newColumn)
        await todos.save()
        res.status(200).json({status: 'success', data: todos})
        return;
      }
      res.status(404).json({status: 'error', message: 'Todos not found'})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }
}

export default new TodosCtrl()
