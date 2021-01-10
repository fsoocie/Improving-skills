import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {Route, Switch } from 'react-router-dom'
import {SideMenu} from '../../modules/SideMenu/SideMenu'
import {addOneSec, clearTimer, setIsPaused} from '../../store/ducks/timer/actionCreators'
import { Activities } from './Components/Activities'
import {Skills} from './Components/Skills'
import { Timer } from './Components/Timer'
import { Todos } from './Components/Todos'


export const HomePage: React.FC = () => {

  const dispatch = useDispatch()

  const [int, setInt] = useState<any>(null)

  const startTimer = () => {
    const interval = setInterval(() => {
      dispatch(addOneSec())
    }, 1000)
    setInt(interval)
    dispatch(setIsPaused(false))
  }
  const stopTimer = () => {
    clearInterval(int)
    dispatch(setIsPaused(true))
  }
  const resetTimer = () => {
    stopTimer()
    dispatch(clearTimer())
  }

  return (

    <>
      <SideMenu />
        <Switch>
          <Route exact path='/' component={Todos}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/activities' component={Activities}/>
          <Route path='/timer' render={() => (
            <Timer startTimer={startTimer} resetTimer={resetTimer}  stopTimer={stopTimer} />
          )} />
        </Switch>
    </>
  )
}
