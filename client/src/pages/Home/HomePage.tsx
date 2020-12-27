import React from 'react'
import {Route, Switch } from 'react-router-dom'
import {SideMenu} from '../../modules/SideMenu/SideMenu'
import { Activities } from './Components/Activities'
import {Skills} from './Components/Skills'
import { Todos } from './Components/Todos'

export const HomePage: React.FC = () => {
  return (
    <>
      <SideMenu />
        <Switch>
          <Route exact path='/' component={Todos}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/activities' component={Activities}/>
        </Switch>
    </>
  )
}
