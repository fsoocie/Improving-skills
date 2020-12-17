import {Router} from 'express'
import TodosController from '../controllers/TodosController'
import {passport} from '../core/passport'

const router = Router()

router.get('/', passport.authenticate('jwt', {session: false}), TodosController.getTodos)
router.put('/columns', passport.authenticate('jwt', {session: false}), TodosController.updateColumns)
router.post('/', passport.authenticate('jwt', {session: false}), TodosController.createTodos)

export default router
