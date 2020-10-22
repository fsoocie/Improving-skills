import { config } from 'dotenv'; config()
import express from 'express'
import User from '../models/User'
import {createHash} from 'crypto'
import transporter from '../core/nodemailer'

class UserCtrl {
  async register(req: express.Request, res: express.Response): Promise<void> {
    try {
      const data = {
        username: req.body.username,
        email: req.body.email,
        password: createHash('md5').update(req.body.password + process.env.SECRET_KEY).digest('hex'),
        confirmHash: createHash('md5').update(req.body.username + process.env.SECRET_KEY).digest('hex')
      }
      const user = await User.create(data)
      await transporter.sendMail({
        from: 'Improving-Skills company',
        to: data.email,
        subject: 'Confirm your Improving-Skills account.',
        html: `<span>To verify your account, please <a href='http://localhost:5000/auth/verify/${data.confirmHash}'><b>click me</b></a></span>`
      })
      res.status(201).json({status: 'success', data: user})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }
  async showAll(req: express.Request, res: express.Response): Promise<void> {
    try {
      const users = await User.find({})
      res.status(200).json({status: 'success', data: users})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }
  async showById(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = await User.findById(req.params._id)
      if (!user) {
        res.status(404).json({status: 'error', message: 'Пользователь не найден!'})
        return
      }
      res.status(200).json({status: 'success', data: user})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }
  async verify(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = await User.findOne({confirmHash: req.params.hash})
      if (!user) {
        res.status(404).json({status: 'error', message: 'Пользователь с таким хэшом не найден!'})
        return
      }
      user.isConfirmed = true
      user.confirmHash = undefined
      await user.save()
      res.status(200).json({status: 'success', data: {message: 'Пользователь подтвержден'}})
    } catch (error) {
      res.status(500).json({status: 'error', message: error.message})
    }
  }
}

export default new UserCtrl()
