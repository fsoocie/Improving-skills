import {Router} from 'express'
import SkillsController from '../controllers/SkillsController'
import {passport} from '../core/passport'

const router = Router()

router.get('/', passport.authenticate('jwt'), SkillsController.getAll)
router.get('/:_id', passport.authenticate('jwt'), SkillsController.getOneById)
router.post('/', passport.authenticate('jwt'), SkillsController.create)

export default router
