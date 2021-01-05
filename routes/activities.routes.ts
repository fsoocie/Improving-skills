import {Router} from 'express'
import ActivitiesController from '../controllers/ActivitiesController'
import {passport} from '../core/passport'

const router = Router()

router.get('/month/:month', passport.authenticate('jwt'), ActivitiesController.getAllByMonth)
router.get('/:_id', ActivitiesController.getAllBySkill)
router.post('/', passport.authenticate('jwt'), ActivitiesController.create)

export default router
