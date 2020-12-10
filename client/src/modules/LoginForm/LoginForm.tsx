import React from 'react'
import './LoginForm.scss'
import {useDispatch} from 'react-redux'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {Button, Form, Typography} from 'antd'
import {LockOutlined, MailOutlined} from '@ant-design/icons'
import {GoogleButton} from '../../components/GoogleButton/GoogleButton'
import {Slides} from '../../pages/AuthenticatePage'
import {authApi, ISignInPayload} from '../../services/api/authApi'
import {getHelp, getValidateStatus} from '../../utils/validateHelper'
import {ControlFormField} from '../../components/FormField/FormField'
import { fetchSignIn } from '../../store/ducks/user/actionCreators'

interface ILoginFormProps {
  setSlide: (slide: number) => void
}

const loginSchema = yup.object().shape({
  email: yup.string().required('Required field')
    .email('Invalid E-mail')
    .min(10, 'Minimum E-Mail length is 6 symbols').max(40, 'Maximum E-Mail length is 40 symbols'),
  password: yup.string().required('Required field').matches(/^[a-zA-Z0-9()$%_/.]*$/, 'Password can only contain numbers and Latin letters')
    .min(6, 'Minimum password length is 6 symbols').max(40, 'Maximum password length is 40 symbols')
})

export const LoginForm: React.FC<ILoginFormProps> = ({setSlide}) => {

  const {getValues, control, handleSubmit, errors} = useForm<ISignInPayload>({
    resolver: yupResolver(loginSchema)
  })
  const formValues = getValues()
  const dispatch = useDispatch()

  const onSubmit = (payload: ISignInPayload) => {
    dispatch(fetchSignIn(payload))
  };

  return (
    <Form
      className='login-form'
      initialValues={{ remember: true }}
      onFinish={handleSubmit(onSubmit)}
    >
      <div className='register-form-header'>
        <Typography.Title level={3}>Login</Typography.Title>
      </div>

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

      <Form.Item style={{marginBottom: 18}}>
        <div className='loginItem'>
          <Button className='loginItem__button' type='primary' htmlType='submit' >
            <Typography.Title level={5} style={{color: 'aliceblue', marginTop: 2}}>Login</Typography.Title>
          </Button>
        </div>
      </Form.Item>

      <Form.Item className='googleSignInItem'>
          <GoogleButton text='Sign In with Google' />
      </Form.Item>

      <Typography.Link className='linkToRegister' type='secondary' onClick={setSlide.bind(null, Slides.Register)}>or Register</Typography.Link>
    </Form>
)}
