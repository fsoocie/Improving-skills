import React from 'react'
import { Clock } from '../../../components/Clock/Clock'
import { ClockControls } from '../../../components/ClockControls/ClockControls'
import '../../../styles/Pages/TimerPage.scss'

interface ITimerProps {
  stopTimer: () => void
  startTimer: () => void
  resetTimer: () => void
}

export const Timer: React.FC<ITimerProps> = ({stopTimer, startTimer, resetTimer}) => {
  return (
    <div className='masteryPage homeComponent timerPage' >
      <Clock />
      <ClockControls stopTimer={stopTimer} resetTimer={resetTimer} startTimer={startTimer} />
    </div>
  )
}
