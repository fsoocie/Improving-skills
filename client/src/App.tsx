import React, {useEffect} from 'react'
import 'antd/dist/antd.css'
import {useDispatch} from 'react-redux'
import {AuthenticatePage} from './pages/AuthenticatePage'
import {TodosPage} from './pages/TodosPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {authApi} from './services/api/authApi'
import {setUser} from './store/ducks/user/actionCreators'
import {PrivateRoute} from './utils/PrivateRoute'

export const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    authApi.me().then(userData => {
      dispatch(setUser(userData))
    })
  }, [])

  return (
    <Router>
      <Route path='/auth' component={AuthenticatePage}/>
      <PrivateRoute path='/todos' component={TodosPage} />
    </Router>
  );
}
