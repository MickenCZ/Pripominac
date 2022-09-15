import Reminder from "./Reminder"

export default function Reminders({remindersData, UnixStamp, trida, poradoveCislo, subject}) {
  const reminders = remindersData.result
  const resultJSX = []
  for (let day of reminders) {
    for (let reminderArray of Object.values(day)) {
      if (Array.isArray(reminderArray)) {
        for (let reminder of reminderArray) {
          if (UnixStamp === reminder.date && trida === reminder.trida && poradoveCislo === reminder.subjectIndex && subject === reminder.subject) {resultJSX.push(<Reminder type={reminder.reminderType} text={reminder.description} key={reminder.description} />)}
        }
      }
    }
  }
  return (
<>{resultJSX}</>
  )
}
