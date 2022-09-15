import getMonday from "./getMonday"
//getMonday returns UnixTimeStamp of current Monday

function getCurrentWeek() {
  const milisInADay = 86400000
  const week = {
    "monday":getMonday(Date.now()),
    "tuesday":getMonday(Date.now()) + 1*milisInADay,
    "wednesday":getMonday(Date.now()) + 2*milisInADay,
    "thursday":getMonday(Date.now()) + 3*milisInADay,
    "friday":getMonday(Date.now()) + 4*milisInADay,
  }
  return week
}

//Accurately creates an object of days with unix milis as values from the current week 

export default getCurrentWeek