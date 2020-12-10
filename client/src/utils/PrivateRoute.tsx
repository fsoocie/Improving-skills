import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect, Route } from 'react-router-dom'
import { selectIsAuth } from '../store/ducks/user/selectors'

interface PrivateRouteProps {
  component: React.ElementType
  [x:string]: any;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({component: Component, ...rest}) => {

  const isAuth = useSelector(selectIsAuth)

  return (
    <Route {...rest} render={props => (
        isAuth
          ? <Component {...props} />
          : <Redirect to='/auth' />
      )}/>
  )
}
