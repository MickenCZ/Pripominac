import getLessonDates from "./getLessonDates.js"

function incrementWeek(displayedDates) {
  const milisInAWeek = 604800000
  const UnixDatesResult = {}
  const daysOfTheWeek = Object.keys(displayedDates.UnixDates)
  for (let day of daysOfTheWeek) {
    UnixDatesResult[day] = displayedDates.UnixDates[day] + milisInAWeek
  }
  return {
    stringDates:getLessonDates(UnixDatesResult),
    UnixDates:UnixDatesResult,
  }
}

/*Takes the entire displayedDates object and increases all dates (both text and Unix) by one week*/

export default incrementWeek