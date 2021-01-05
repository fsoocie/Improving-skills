import {PlusOutlined} from '@ant-design/icons'
import Empty from 'antd/lib/empty'
import Spin from 'antd/lib/spin'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {ActivitiesListContent} from '../../components/ActivitiesListContent/ActivitiesListContent'
import {DatePaginator} from '../../components/DatePaginator/DatePaginator'
import {MasteryBlock} from '../../components/MasteryBlock/MasteryBlock'
import {masteryAPI} from '../../services/api/masteryApi'
import {IActivity} from '../../store/ducks/activities/types/state'
import { getDataObj } from '../../utils/dateFunctions'

export const ActivitiesList: React.FC = () => {

  const [activities, setActivities] = useState<IActivity[] | null>(null)

  const onChangeSelectHandler = (month: number) => {
    setActivities(null)
    masteryAPI.getActivitiesByMonth(month).then(data => setActivities(data))
  }

  useEffect(() => {
    masteryAPI.getActivitiesByMonth(new Date().getMonth()).then(data => setActivities(data))
  }, [])

  return (
    <MasteryBlock className='activitiesList'>
      <div className="activitiesHeader" style={{textAlign: 'center'}}>
        Activities
      </div>
      <DatePaginator onChangeSelectHandler={onChangeSelectHandler} dataObj={getDataObj(new Date())}/>
      <div className='activitiesList__content'>
        {!activities
          ? <Spin className='activitiesSpinner' />
          : activities.length
            ? <ActivitiesListContent type='activities' activities={activities} />
            : <Empty description='There are not activities' />
        }
      </div>
      <Link to='/activities/createActivity' className='activitiesList__link'><PlusOutlined style={{ fontSize: '18px', color: '#fff' }} /></Link>
    </MasteryBlock>
  )
}
