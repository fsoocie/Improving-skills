import express from 'express'
import Activity from '../models/Activity'
import Skill, {ISkill} from '../models/Skill'
import {IDocumentUser} from '../models/User'


class SkillsCtrl {
  async getAll(req: express.Request, res: express.Response): Promise<void> {
    try {
      const owner = req.user as IDocumentUser
      const skills = await Skill.find({owner: owner._id})
      res.status(200).json({status: 'success', data: skills})
    } catch (e) {
      res.status(500).json({status: 'error', message: e.message})
    }
  }
  async getOneById(req: express.Request, res: express.Response): Promise<void> {
    try {
      const owner = req.user as IDocumentUser
      const skillId = req.params._id
      const skill = await Skill.findById(skillId)
      if (skill && skill.owner.toString() === owner._id.toString()) {
        res.status(200).json({status: 'success', data: skill})
        return;
      }
      res.status(404).json({status: 'error', message: 'Skill not found'})
    } catch (e) {
      res.status(500).json({status: 'error', message: e.message})
    }
  }
  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      const owner = req.user as IDocumentUser
      const data: ISkill = {
        name: req.body.name,
        minutes: req.body.minutes || 0,
        img: req.body.img || null,
        description: req.body.description,
        owner: owner._id
      }
      const skill = await Skill.create(data)
      res.status(201).json({status: 'success', data: skill})
    } catch (e) {
      res.status(500).json({status: 'error', message: e.message})
    }
  }
  async delete(req: express.Request, res: express.Response): Promise<void> {
    try {
      const owner = req.user as IDocumentUser
      await Skill.deleteOne({owner: owner._id, _id: req.params._id})
      await Activity.deleteMany({owner: owner._id, skill: req.params._id})
      res.status(200).json({status: 'success', data: 'Skill has been deleted!'})
    } catch (e) {
      res.status(500).json({status: 'error', message: e.message})
    }
  }
}

export default new SkillsCtrl()
