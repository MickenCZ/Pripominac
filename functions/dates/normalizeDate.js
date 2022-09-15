function normalizeDate(timeStamp) {
  let days = Math.floor(timeStamp/86400000)
  let milis = days*86400000
  return milis
}

/*This keeps the same day, month and year for the day, but removes all hours, minutes etc. This way, all my dates uniquely identify days and are the same format*/

export default normalizeDate