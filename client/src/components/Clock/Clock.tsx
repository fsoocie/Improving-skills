import Progress from 'antd/lib/progress'
import React from 'react'
import {useSelector} from 'react-redux'
import {IRootState} from '../../store/store'
import {getTimerObject} from '../../utils/dateFunctions'

export const Clock: React.FC = () => {

  const seconds = useSelector((state: IRootState) => state.timer.seconds)
  const t = getTimerObject(seconds)
  return (
    <div className='clock' >
      <Progress
        type="circle"
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        percent={(seconds % 60) / 60 * 100}
        showInfo={false}
        width={400}
        strokeWidth={3}
      />
      <div className='clock__time'><span>{`${t.hours}:${t.minutes}:${t.seconds}`}</span></div>
    </div>
  )
}
