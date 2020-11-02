import {Button, Form, Typography} from 'antd';
import {LockOutlined, MailOutlined} from '@ant-design/icons';
import React from 'react';
import './LoginForm.scss'
import {FormField} from "../../components/FormField/FormField";
import {GoogleButton} from "../../components/GoogleButton/GoogleButton";
import { Slides } from '../../pages/AuthenticatePage';

interface ILoginFormProps {
  setSlide: (slide: number) => void
}

export const LoginForm: React.FC<ILoginFormProps> = ({setSlide}) => {

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="login-form"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <div className='register-form-header'>
        <Typography.Title level={3}>Login</Typography.Title>
      </div>

      <FormField
        name='email'
        prefix={<MailOutlined />}
        placeholder='Enter E-mail'
        rules={[{ required: true, message: 'Please input your E-mail!' }]}
        size='large'
        type='text'
      />

      <FormField
        prefix={<LockOutlined className="site-form-item-icon" />}
        type='password'
        size='large'
        placeholder='Enter Password'
        name='password'
        rules={[{ required: true, message: 'Please input your Password!' }]}
      />
      <Form.Item style={{marginBottom: 18}}>
        <div className='loginItem'>
          <Button className='loginItem__button' type="primary" htmlType="submit" >
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
