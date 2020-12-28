import express from 'express'
import Activity, {IActivity} from '../models/Activity'
import Skill from '../models/Skill'
import {IDocumentUser} from '../models/User'

class ActivitiesCtrl {
  async getAllByMonth(req: express.Request, res: express.Response): Promise<void> {
    const owner = req.user as IDocumentUser
    try {
      const activities = await Activity.find({month: req.body.month, owner: owner._id})
      res.status(200).json({status: 'success', data: activities})
    } catch (e) {
      res.status(500).json({status: 'error', message: e.message})
    }
  }
  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      const owner = req.user as IDocumentUser
      const data: IActivity = {
        description: req.body.description,
        minutes: req.body.minutes,
        skill: req.body.skill,
        month: new Date().getMonth(),
        owner: owner._id
      }
      const activity = await Activity.create(data)
      const skill = await Skill.findById(data.skill)
      if (skill) {
        if (owner._id.toString() === skill.owner.toString()) {
          res.status(201).json({status: 'success', data: activity})
          return;
        }
      }
      res.status(403).json({status: 'error', message: 'You are not owner of the skill'})
    } catch (e) {
      res.status(500).json({status: 'error', message: e.message})
    }
  }
}

export default new ActivitiesCtrl()
