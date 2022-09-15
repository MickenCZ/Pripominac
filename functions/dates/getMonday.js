import normalizeDate from "./normalizeDate.js"

function getMonday(unixTimeStamp) {  
  const milisInADay = 86400000
  let day = new Date(normalizeDate(unixTimeStamp))//this is now Date data structure
  let dayTimeStamp = normalizeDate(unixTimeStamp)//this is UNIX timestamp of the day variable
  while (day.getDay() !== 1) {//while day isn't monday
    dayTimeStamp -= milisInADay //decrement UNIX miliseconds by day
    day = new Date(dayTimeStamp) //set day to new UNIX time stamp
    //when loop done, day is Monday
  }
  return dayTimeStamp
}

/*Since every week starts with a Monday, I can use this to only send Monday to the server, since just that uniquely identifies a week*/

export default getMonday