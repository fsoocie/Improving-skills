import {Button, Form, Typography} from 'antd';
import {LockOutlined, UserOutlined, MailOutlined} from '@ant-design/icons';
import React from 'react';
import './RegisterForm.scss'
import {FormField} from "../../components/FormField/FormField";
import {GoogleButton} from "../../components/GoogleButton/GoogleButton";
import {Slides} from "../../pages/AuthenticatePage";

interface IRegisterFormProps {
  setSlide: (slide: number) => void
}

export const RegisterForm: React.FC<IRegisterFormProps> = ({setSlide}) => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_register"
      className="register-form"
      initialValues={{remember: true}}
      onFinish={onFinish}
    >
      <div className='register-form-header'>
        <Typography.Title level={3}>Registration</Typography.Title>
      </div>

      <FormField
        name='username'
        prefix={<UserOutlined className="site-form-item-icon"/>}
        placeholder='Enter Username'
        rules={[{required: true, message: 'Please input your Username'}]}
        size='large'
        type='text'
      />

      <FormField
        name='email'
        prefix={<MailOutlined/>}
        placeholder='Enter E-mail'
        rules={[{required: true, message: 'Please input your E-mail!'}]}
        size='large'
        type='text'
      />

      <FormField
        prefix={<LockOutlined className="site-form-item-icon"/>}
        type='password'
        size='large'
        placeholder='Enter Password'
        name='password'
        rules={[{required: true, message: 'Please input your Password!'}]}
      />

      <FormField
        prefix={<LockOutlined className="site-form-item-icon"/>}
        type='password'
        size='large'
        placeholder='Repeat Password'
        name='repeatPassword'
        rules={[{required: true, message: 'Please repeat your Password!'}]}
      />

      <Form.Item>
        <div className='registerItem'>
          <Button className='registerItem__button' type="primary" htmlType="submit">
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