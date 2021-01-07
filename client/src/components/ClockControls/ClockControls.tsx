import {CaretRightOutlined, PauseOutlined } from '@ant-design/icons'
import {Button} from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {IRootState} from '../../store/store'

interface IClockControls {
  stopTimer: () => void
  startTimer: () => void
  resetTimer: () => void
}

export const ClockControls: React.FC<IClockControls> = ({startTimer, stopTimer, resetTimer}) => {

  const isPaused = useSelector((state: IRootState) => state.timer.isPaused)
  const seconds = useSelector((state: IRootState) => state.timer.seconds)

  return (
    <div className='clockControls'>
      <Button className='clockControls__reset'
              type='primary' danger
              onClick={resetTimer}
      >RESET</Button>
      {
        isPaused
          ? <Button className='clockControls__pause'  shape='circle' onClick={() => {
              startTimer()
            }}>
              <CaretRightOutlined />
            </Button>
          : <Button className='clockControls__pause'  shape='circle' onClick={() => {
            stopTimer()
          }}>
              <PauseOutlined />
            </Button>
      }
      <Link onClick={resetTimer} to={{pathname: '/activities/createActivity', state: Math.floor(seconds / 60)}} >
        <Button className='clockControls__save'  type='primary'>SAVE</Button>
      </Link>
    </div>
  )
}
