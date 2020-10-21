import express from 'express'
import User from "../models/User";

class UserCtrl {
  async register(req: express.Request, res: express.Response) {
    try {
      const data = {
        username: req.body.username,
        password: req.body.password
      }
      const user = await User.create(data)
      res.status(201).json({status: 'success', data: user})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }
  async showAll(req: express.Request, res: express.Response) {
    try {
      const users = await User.find({})
      res.status(200).json({status: 'success', data: users})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }
  async showById(req: express.Request, res: express.Response) {
    try {
      const user = await User.findById(req.params._id)
      if (!user) {
        res.status(404).json({status: 'error', message: 'Пользователь не найден!'})
      }
      res.status(200).json({status: 'success', data: user})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }
}

export default new UserCtrl()
