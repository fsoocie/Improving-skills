import React, {useRef} from 'react';
import classNames from 'classnames';
import '../styles/Authenticate/AuthenticatePage.scss';
import {Carousel} from 'antd';
import {LoginForm} from '../modules/LoginForm/LoginForm';
import {RegisterForm} from '../modules/RegisterForm/RegisterForm';
import {StartForm} from '../modules/StartForm/StartForm';

export enum Slides {
  Start = 0,
  Login = 1,
  Register = 2
}

export const AuthenticatePage = () => {

  const carouselRef = useRef<Carousel | null>(null)
  const setSlide = (slide: number) => {
    carouselRef.current!.goTo(slide)
  }

  return (
    <Carousel ref={carousel => carouselRef.current = carousel} dots={{className: 'dots'}}>
      <div>
        <div className='authPage startPage'>
          <StartForm setSlide={setSlide}/>
        </div>
      </div>
      <div>
        <div className={classNames('authPage', 'loginPage')}>
            <LoginForm setSlide={setSlide} />
        </div>
      </div>
      <div>
        <div className={classNames('authPage', 'registerPage')}>
          <RegisterForm setSlide={setSlide} />
        </div>
      </div>
    </Carousel>
  )
}

