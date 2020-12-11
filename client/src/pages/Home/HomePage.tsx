import React from 'react'
import {Route, Switch } from 'react-router-dom'
import {SideMenu} from '../../modules/SideMenu/SideMenu'
import {Skills} from './Components/Skills'
import { Todos } from './Components/Todos'

export const HomePage: React.FC = () => {
  return (
    <div>
      <SideMenu />
        <Switch>
          <Route exact path='/' component={Todos}/>
          <Route exact path='/skills' component={Skills}/>
        </Switch>
    </div>
  )
}
