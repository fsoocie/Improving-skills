import {IActivity} from '../store/ducks/activities/types/state'

export const sortActivitiesToDayArrays = (arr: IActivity[]): {[key:string]: IActivity[]} => {
  arr.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  return arr.reduce((acc: {[key:string]: IActivity[]}, value) => {
    const date = new Date(value.createdAt)
    const key: string = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    acc[key]? acc[key].push(value): acc[key] = [value]
    return acc
  }, {})
}

export const getStringMonth = (month: number) => {
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
  return monthNames[month]
}

export const getStringWeekDay = (day: number) => {
  const weekDaysNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  return weekDaysNames[day]
}

export const getCorrectDate = (createdAt: string): string => {
  const date = new Date(createdAt)
  return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
}

export const getHoursToNextLevel = (minutes: number): number => {
  return Math.floor((600 - (minutes % 600)) / 60)
}

export const getDailyAverage = (createdAt: string, minutes: number): number => {
  const timeDifference = new Date().getTime() - new Date(createdAt).getTime()
  const differenceInDays = Math.ceil(timeDifference / (1000*60*60*24))
  return minutes / differenceInDays
}

interface IGetDataObj {
  year: number,
  month: number,
  day: number
}

export const getDataObj = (date: Date ): IGetDataObj => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  }
}

interface IGetTimerObject {
  seconds: string,
  minutes: string,
  hours: string
}

const formatTime = (num: number): string => {
  return num <= 9? '0' + num: String(num)
}

export const getTimerObject = (seconds: number): IGetTimerObject => ({
  seconds: formatTime(seconds % 60),
  minutes: formatTime(Math.floor((seconds % 3600) / 60)),
  hours: formatTime(Math.floor(seconds / 3600))
})
