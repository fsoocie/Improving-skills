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
      const data = {
        columns: req.body.columns,
        owner: owner._id
      }
      const todos = await TodosModel.findOne({owner: data.owner})

      if (todos) {
        todos.columns = data.columns
        await todos.save()
        res.status(200).json({status: 'success', data})
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
}

export default new TodosCtrl()
