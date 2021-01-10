import {Router} from 'express'
import TodosController from '../controllers/TodosController'
import {passport} from '../core/passport'

const router = Router()

router.put('/column', passport.authenticate('jwt', {session: false}), TodosController.addColumn)
router.patch('/column', passport.authenticate('jwt', {session: false}), TodosController.clearColumn)
router.patch('/columnTitle', passport.authenticate('jwt', {session: false}), TodosController.updateTitle)
router.delete('/column/:columnIndex', passport.authenticate('jwt', {session: false}), TodosController.deleteColumn)

router.put('/columns', passport.authenticate('jwt', {session: false}), TodosController.updateColumns)

router.post('/task', passport.authenticate('jwt', {session: false}), TodosController.addTask)
router.patch('/task', passport.authenticate('jwt', {session: false}), TodosController.updateTask)
router.patch('/deleteTask', passport.authenticate('jwt', {session: false}), TodosController.deleteTask)

router.get('/', passport.authenticate('jwt', {session: false}), TodosController.getTodos)
router.post('/', passport.authenticate('jwt', {session: false}), TodosController.createTodos)

export default router
