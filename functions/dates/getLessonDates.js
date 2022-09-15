function getLessonDates(week) {
  let {monday, tuesday, wednesday, thursday, friday} = week
  //values of object are unix timestamps
  monday = new Date(monday)
  tuesday = new Date(tuesday)
  wednesday = new Date(wednesday)
  thursday = new Date(thursday)
  friday = new Date(friday)
  const lessonDates = {
    "monday":monday.getDate() + "." + (monday.getMonth() + 1) + ".",
    "tuesday":tuesday.getDate() + "." + (tuesday.getMonth() + 1) + ".",
    "wednesday":wednesday.getDate() + "." + (wednesday.getMonth() + 1) + ".",
    "thursday":thursday.getDate() + "." + (thursday.getMonth() + 1) + ".",
    "friday":friday.getDate() + "." + (friday.getMonth() + 1) + "."
  }
  return lessonDates
}

//Just creates a human-readable week object from a weekObject with Unix Milis
//When finished looks like {monday:"27.5.", tuesday:"28.5."} etc.

export default getLessonDates