import React, {useEffect} from 'react'
import './DatePaginator.scss'
import classNames from 'classnames'
import {useSelector} from 'react-redux'
import {selectActivitiesMonth} from '../../store/ducks/activities/selectors'

interface DatePaginatorItemProps {
  i:number,
  year: number,
  active: boolean,
  setActiveHandler: (e: React.SyntheticEvent, i: number) => void
}

const DatePaginatorItem: React.FC<DatePaginatorItemProps> = React.memo(({i, year, active, setActiveHandler}) => (
  <div
    data-month={i}
    className={classNames('date-paginator__item', {'date-paginator__item--active': active})}
    onClick={(e) => setActiveHandler(e, i)}>
    {`${i}/${year}`}
  </div>
))

interface IDatePaginatorProps {
  onChangeSelectHandler: (month: number) => void
  dataObj: {
    year: number
    month: number
  }
}

export const DatePaginator: React.FC<IDatePaginatorProps> = ({dataObj, onChangeSelectHandler}) => {

  const month = useSelector(selectActivitiesMonth)
  const setActiveHandler = (e: any, i: number) => {
    onChangeSelectHandler(i-1)
  }

  useEffect(() => {
    const activeEl = document.querySelector(`[data-month="${month + 1}"]`) as HTMLElement

    if (activeEl) {
      activeEl.scrollIntoView({inline: 'center', behavior: 'smooth', block: 'nearest'})
    }
  }, [month])

  return (
    <div className='date-paginator'>
      {new Array(12).fill('').map((_, i) => (
        <DatePaginatorItem active={month + 1 === i+1} setActiveHandler={setActiveHandler} i={i+1} year={dataObj.year} key={i} />
      ))}
    </div>
  )
}
