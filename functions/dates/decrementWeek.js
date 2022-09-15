import getLessonDates from "./getLessonDates.js"

function decrementWeek(displayedDates) {
  const milisInAWeek = 604800000
  const UnixDatesResult = {}
  const daysOfTheWeek = Object.keys(displayedDates.UnixDates)
  for (let day of daysOfTheWeek) {
    UnixDatesResult[day] = displayedDates.UnixDates[day] - milisInAWeek
  }
  return {
    stringDates:getLessonDates(UnixDatesResult),
    UnixDates:UnixDatesResult,
  }
}

/*Takes the entire displayedDates object and decreases all dates (both text and Unix) by one week*/

export default decrementWeek