import React from 'react';
import './FormField.scss';
import {Form, Input} from 'antd';
import {FormItemProps} from 'antd/lib/form';
import {InputProps} from 'antd/lib/input';
import {Controller} from 'react-hook-form';

type IFormFieldProps = FormItemProps & InputProps

export const FormField: React.FC<IFormFieldProps> = (props) => {
  return (
    <Form.Item
      rules={props.rules}
      help={props.help}
      hasFeedback={props.hasFeedback}
      validateStatus={props.validateStatus}
    >
     <Input
      className='formInput'
      name={props.name}
      size={props.size}
      prefix={props.prefix}
      type={props.type}
      placeholder={props.placeholder}
      />
    </Form.Item>
  )
}

interface IControlFormFieldProps extends IFormFieldProps {
  control: any
  name: string
}

export const ControlFormField: React.FC<IControlFormFieldProps> = (props) => {
  return (
    <Form.Item
      help={props.help}
      validateStatus={props.validateStatus}
      hasFeedback={props.hasFeedback}
    >
      <Controller
        as={Input}
        className='formInput'
        name={props.name}
        control={props.control}
        defaultValue={props.defaultValue || ''}
        prefix={props.prefix}
        placeholder={props.placeholder}
        size={props.size}
        type={props.type}
      />
    </Form.Item>
  )
}

