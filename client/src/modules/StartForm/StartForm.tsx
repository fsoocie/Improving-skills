import React from 'react'
import './StartForm.scss'
import {Button, Typography} from 'antd'
import {Slides} from '../../pages/AuthenticatePage'

interface IStartFormProps {
  setSlide: (slide: number) => void
}


export const StartForm: React.FC<IStartFormProps> = ({setSlide}) => {
  return (
    <>
      <div className='startForm__header'>
        <Typography.Title level={1} className='startForm__title'>Improving-Skills</Typography.Title>
        <Typography.Title level={5} type='secondary' className='startForm__describe'>Study more effective! Save your skill`s progress, write down todos.</Typography.Title>
      </div>
      <div className='startForm__buttons'>
        <Button onClick={setSlide.bind(null, Slides.Login)} className='startForm__buttons-signIn' shape='round' type='primary' size='large'>
          <Typography.Title level={4}>Login</Typography.Title>
        </Button>
        <Button onClick={setSlide.bind(null, Slides.Register)} className='startForm__buttons-signUp' shape='round' danger size='large'>
          <Typography.Title level={5} type='danger'>Register</Typography.Title>
        </Button>
      </div>
    </>
  );
};



