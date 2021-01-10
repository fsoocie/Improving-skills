
type statuses = 'master' | 'professional' | 'advanced' | 'advanced beginner' | 'beginner' | 'novice'

interface ITimeData {
  hours: number
  level: number
  status: statuses
  progress: number
}

const MINUTES_IN_LEVEL = 600

export function convertMinutesToLevel(minutes: number): number {
  return Math.floor(minutes / MINUTES_IN_LEVEL)
}

export function convertMinutesToPercent(minutes: number): number {
  return (minutes % MINUTES_IN_LEVEL) / MINUTES_IN_LEVEL * 100
}

export function convertLevelToStatus(level: number): statuses {
  const skillPlank = Math.floor(1000 / 6)
  if (level > skillPlank*5) return 'master'
  else if (level > skillPlank*4) return 'professional'
  else if (level > skillPlank*3) return 'advanced'
  else if (level > skillPlank*2) return 'advanced beginner'
  else if (level > skillPlank) return 'beginner'
  else return 'novice'
}

export const getTimeData = (minutes: number): ITimeData => ({
  hours: Math.floor(minutes / 60),
  level: convertMinutesToLevel(minutes),
  status: convertLevelToStatus(convertMinutesToLevel(minutes)),
  progress: convertMinutesToPercent(minutes)
})
