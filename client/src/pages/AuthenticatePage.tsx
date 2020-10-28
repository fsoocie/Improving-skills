import {Carousel} from "antd";
import React, {CSSProperties} from "react";
import '../styles/Authenticate/AuthenticatePage.scss'
import {LoginForm} from "../modules/LoginForm/LoginForm";
import {RegisterForm} from "../modules/RegisterForm/RegisteForm";
import classNames from 'classnames'

const contentStyle: CSSProperties = {
  height: '100vh',
  width: '100vw',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const AuthenticatePage = () => {

  const onChange = () => console.log('changed')

  return (
    <Carousel dots={{className: 'dots'}} afterChange={onChange}>
      <div>
        <div style={{...contentStyle, background: "green"}}>1</div>
      </div>
      <div>
        <div className={classNames('authPage', 'loginPage')}>
            <LoginForm />
        </div>
      </div>
      <div>
        <div className={classNames('authPage', 'registerPage')}>
          <RegisterForm />
        </div>
      </div>
    </Carousel>
  )
}

