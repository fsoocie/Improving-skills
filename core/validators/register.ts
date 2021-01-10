import {body} from 'express-validator'

export default [
  body('email', 'Incorrect E-Mail!').isEmail().isLength({min:10, max: 40}).withMessage('E-mail length is wrong!'),
  body('password')
    .isLength({min:6, max: 40}).withMessage('Password length is wrong!')
    .isString().withMessage('Password should be type of string!')
    .custom((value, {req}) => {
      if (value !== req.body.password2) {
        throw new Error('Password confirmation does not match password!')
      } return true
    }),
  body('username', 'Incorrect Username!')
    .isLength({min:6, max: 24}).withMessage('Username length is wrong!')
    .isString().withMessage('Username should be type of string!')
]
