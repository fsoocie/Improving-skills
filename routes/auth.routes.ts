import {Router} from 'express'
import UserController from "../controllers/UserController";
import {passport} from '../core/passport';
import registerValidator from '../core/validators/register'
const router = Router()

router.get('/users', UserController.showAll)
router.get('/users/:_id', UserController.showById)
router.get('/verify/:hash', UserController.verify)
router.get('/me', passport.authenticate('jwt', {session: false}), UserController.me)
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email', 'openid'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login'}),
  UserController.afterGoogleLogin);

router.post('/register', registerValidator, UserController.register)
router.post('/local', passport.authenticate('local'), UserController.afterLocalLogin)

export default router
