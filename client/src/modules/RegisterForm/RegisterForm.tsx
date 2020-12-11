import React from 'react'
import './RegisterForm.scss'
import {useDispatch} from 'react-redux'
import * as yup from 'yup'
import {Button, Form, Typography} from 'antd'
import {LockOutlined, UserOutlined, MailOutlined} from '@ant-design/icons'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {ControlFormField} from '../../components/FormField/FormField'
import {GoogleButton} from '../../components/GoogleButton/GoogleButton'
import {Slides} from '../../pages/AuthenticatePage'
import {ISignUpPayload} from '../../services/api/authApi'
import {fetchSignUp} from '../../store/ducks/user/actionCreators'
import {getHelp, getValidateStatus } from '../../utils/validateHelper'

interface IRegisterFormProps {
  setSlide: (slide: number) => void
}

const registerSchema = yup.object().shape({
  username: yup.string().required('Required field')
    .min(6, 'Minimum Username length is 6 symbols').max(24, 'Maximum Username length is 24 symbols')
    .matches(/^[a-zA-Z0-9()$%_/.]*$/, 'Username can only contain numbers and Latin letters'),
  email: yup.string().required('Required field')
    .email('Invalid E-mail')
    .min(10, 'Minimum E-Mail length is 6 symbols').max(40, 'Maximum E-Mail length is 40 symbols'),
  password: yup.string().required('Required field').matches(/^[a-zA-Z0-9()$%_/.]*$/, 'Password can only contain numbers and Latin letters')
    .min(6, 'Minimum password length is 6 symbols').max(40, 'Maximum password length is 40 symbols'),
  password2: yup.string().required('Required Field').oneOf([yup.ref('password')], 'Passwords must match')
})


export const RegisterForm: React.FC<IRegisterFormProps> = ({setSlide}) => {

  const {control, handleSubmit, getValues, errors, formState} = useForm<ISignUpPayload>({
    resolver: yupResolver(registerSchema)
  })
  const formValues = getValues()
  const dispatch = useDispatch()

  const onSubmit = (payload: ISignUpPayload) => {
    dispatch(fetchSignUp(payload))
  };

  return (
    <Form
      className='register-form'
      initialValues={{remember: true}}
      onFinish={handleSubmit(onSubmit)}
    >
      <div className='register-form-header'>
        <Typography.Title level={3}>Registration</Typography.Title>
      </div>

      <ControlFormField
        name='username'
        control={control}
        prefix={<UserOutlined />}
        placeholder='Enter Username'
        size='large'
        type='text'
        help={getHelp(formValues.username, errors.username?.message)}
        validateStatus={getValidateStatus(formValues.username, !!errors.username)}
        hasFeedback
      />

      <ControlFormField
        name='email'
        control={control}
        prefix={<MailOutlined />}
        placeholder='Enter E-mail'
        size='large'
        type='text'
        help={getHelp(formValues.email, errors.email?.message)}
        validateStatus={getValidateStatus(formValues.email, !!errors.email)}
        hasFeedback
      />

      <ControlFormField
        name='password'
        control={control}
        prefix={<LockOutlined />}
        placeholder='Enter Password'
        size='large'
        type='password'
        help={getHelp(formValues.password, errors.password?.message)}
        validateStatus={getValidateStatus(formValues.password, !!errors.password)}
        hasFeedback
      />

      <ControlFormField
        name='password2'
        control={control}
        prefix={<LockOutlined />}
        placeholder='Repeat Password'
        size='large'
        type='password'
        help={getHelp(formValues.password2, errors.password2?.message)}
        validateStatus={formState.touched.password2? !!errors.password2? 'error': 'success' : ''}
        hasFeedback
      />

      <Form.Item>
        <div className='registerItem'>
          <Button className='registerItem__button' type='primary' htmlType='submit'>
            <Typography.Title level={5}>Register</Typography.Title>
          </Button>
        </div>
      </Form.Item>

      <Form.Item className='googleSignInItem'>
        <GoogleButton text='Sign Up with Google'/>
      </Form.Item>


      <Typography.Link className='linkToLogin' onClick={setSlide.bind(null, Slides.Login)} type='secondary'>or Login</Typography.Link>

    </Form>
  )
}
