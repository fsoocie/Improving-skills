import React, {useRef, useState } from 'react'
import './DatePaginator.scss'
import classNames from 'classnames'

interface DatePaginatorItemProps {
  i:number,
  year: number,
  active: number,
  setActiveHandler: (e: React.SyntheticEvent, i: number) => void
}

const DatePaginatorItem: React.FC<DatePaginatorItemProps> = ({i, year, active, setActiveHandler}) => (
  <div
    className={classNames('date-paginator__item', {'date-paginator__item--active': active === i})}
    onClick={(e) => setActiveHandler(e, i)}
  >{`${i}/${year}`}</div>
)

export const DatePaginator: React.FC<{year:number}> = ({year}) => {
  const [active, setActive] = useState(1)
  const ref = useRef<HTMLDivElement | null>(null)
  const setActiveHandler = (e: React.SyntheticEvent, i: number) => {
    setActive(i)
    e.currentTarget.scrollIntoView({inline: 'center', behavior: 'smooth', block: 'nearest'})
  }

  return (
    <div className='date-paginator' ref={ref}>
      {new Array(12).fill('').map((_, i) => (
        <DatePaginatorItem active={active} setActiveHandler={setActiveHandler} i={i+1} year={year} key={i} />
      ))}
    </div>
  )
}
