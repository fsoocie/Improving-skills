import React, {useEffect} from 'react'
import 'antd/dist/antd.css'
import {useDispatch} from 'react-redux'
import {AuthenticatePage} from './pages/AuthenticatePage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {authApi} from './services/api/authApi'
import {setUser} from './store/ducks/user/actionCreators'
import {PrivateRoute} from './utils/PrivateRoute'
import {HomePage} from './pages/Home/HomePage'
import './styles/index.scss'

export const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    authApi.me().then(userData => {
      dispatch(setUser(userData))
    })
  }, [dispatch])

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/auth/:token?' component={AuthenticatePage}/>
          <PrivateRoute path='/' component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

