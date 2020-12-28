import {Router} from 'express'
import ActivitiesController from '../controllers/ActivitiesController'
import {passport} from '../core/passport'

const router = Router()

router.get('/', passport.authenticate('jwt'), ActivitiesController.getAllByMonth)
router.post('/', passport.authenticate('jwt'), ActivitiesController.create)

export default router
