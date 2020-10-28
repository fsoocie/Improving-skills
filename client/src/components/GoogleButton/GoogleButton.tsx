import GoogleIcon from "../../assets/svg/google.svg";
import './GoogleButton.scss'
import {Button, Typography} from "antd";
import React from "react";

interface IGoogleButtonProps {
  text: string
}

export const GoogleButton: React.FC<IGoogleButtonProps> = ({text}) => {
  return (
    <Button size='large' className='googleButton'>
      <img src={GoogleIcon} alt='google-icon' className='googleButton__icon'/>
      <Typography.Text type='secondary' className='googleButton__text'>{text}</Typography.Text>
    </Button>
  )
}
