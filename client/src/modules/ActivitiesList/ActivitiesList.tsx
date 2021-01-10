import {PlusOutlined} from '@ant-design/icons'
import Empty from 'antd/lib/empty'
import Spin from 'antd/lib/spin'
import React, {useEffect, useMemo} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {ActivitiesListContent} from '../../components/ActivitiesListContent/ActivitiesListContent'
import {DatePaginator} from '../../components/DatePaginator/DatePaginator'
import {MasteryBlock} from '../../components/MasteryBlock/MasteryBlock'
import {fetchActivities} from '../../store/ducks/activities/actionCreators'
import {
  selectActivitiesIsLoading,
  selectActivitiesList,
  selectActivitiesMonth
} from '../../store/ducks/activities/selectors'

export const ActivitiesList: React.FC = () => {

  const activities = useSelector(selectActivitiesList)
  const isLoading = useSelector(selectActivitiesIsLoading)
  const month = useSelector(selectActivitiesMonth)
  const currentMonth: number = useMemo(() => new Date().getMonth(), [])
  const dispatch = useDispatch()

  const onChangeSelectHandler = (month: number) => {
    dispatch(fetchActivities(month))
  }

  useEffect(() => {
    if (month === -1) {
      dispatch(fetchActivities(currentMonth))
    }}, [month, currentMonth, dispatch])

  return (
    <MasteryBlock className='activitiesList'>
      <div className="activitiesHeader" style={{textAlign: 'center'}}>
        Activities
      </div>
      <DatePaginator onChangeSelectHandler={onChangeSelectHandler} dataObj={{month, year: new Date().getFullYear()}}/>
      <div className='activitiesList__content'>
        {isLoading
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
