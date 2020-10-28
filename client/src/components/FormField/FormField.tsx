import {Form, Input} from "antd";
import React from "react";
import './FormField.scss'

interface IFormFieldProps {
  prefix?: React.ReactElement
  type?: string
  placeholder?: string
  size?: 'large' | 'middle' | 'small'
  name?: string
  rules?: object[]
}

export const FormField: React.FC<IFormFieldProps> = (props) => {
  return (
    <Form.Item
      name={props.name}
      rules={props.rules}
    >
      <Input
        className='formInput'
        size={props.size}
        prefix={props.prefix}
        type={props.type}
        placeholder={props.placeholder}
      />
    </Form.Item>
  )
}
