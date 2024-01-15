const START = 1630845000000
const DAY = 86400000
const HOUR = 3600000
const MINUTE = 60000

export const getDuration = () => {
  let diff = Date.now() - START

  let days = 0,
    hours = 0,
    minutes = 0

  if (diff >= DAY) {
    days = Math.floor(diff / DAY)
    diff -= days * DAY
  }
  if (diff >= HOUR) {
    hours = Math.floor(diff / HOUR)
    diff -= hours * HOUR
  }
  if (diff >= MINUTE) {
    minutes = Math.floor(diff / MINUTE)
    diff -= minutes * MINUTE
  }
  return `${days} days ${hours} hours ${minutes} minutes`
}
