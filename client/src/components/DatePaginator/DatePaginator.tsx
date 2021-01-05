import React, {useEffect, useMemo, useRef, useState} from 'react'
import './DatePaginator.scss'
import classNames from 'classnames'

interface DatePaginatorItemProps {
  i:number,
  year: number,
  active: number,
  setActiveHandler: (e: React.SyntheticEvent, i: number) => void
}

const DatePaginatorItem: React.FC<DatePaginatorItemProps> = React.memo(({i, year, active, setActiveHandler}) => (
  <div
    data-month={i+1}
    className={classNames('date-paginator__item', {'date-paginator__item--active': active === i})}
    onClick={(e) => setActiveHandler(e, i)}
  >{`${i}/${year}`}</div>
))

interface IDatePaginatorProps {
  onChangeSelectHandler: (month: number) => void
  dataObj: {
    year: number
    month: number
    day: number
  }
}

export const DatePaginator: React.FC<IDatePaginatorProps> = ({dataObj, onChangeSelectHandler}) => {

  const [active, setActive] = useState<number>(new Date().getMonth() + 1)

  const setActiveHandler = (e: React.SyntheticEvent, i: number) => {
    onChangeSelectHandler(i-1)
    setActive(i)
    e.currentTarget.scrollIntoView({inline: 'center', behavior: 'smooth', block: 'nearest'})
  }

  const activeEl = document.querySelector(`[data-month="${dataObj.month}"]`) as HTMLElement

  useEffect(() => {
    if (activeEl) {
      activeEl.click()
    }
  }, [activeEl])

  return (
    <div className='date-paginator'>
      {new Array(12).fill('').map((_, i) => (
        <DatePaginatorItem active={active} setActiveHandler={setActiveHandler} i={i+1} year={dataObj.year} key={i} />
      ))}
    </div>
  )
}
