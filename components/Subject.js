function Subject({modalVisibility, setModalVisibility, setLatestSubjectClicked, predmet, indexInCell, isSingular, trida, cisloHodiny, remindersData, UnixStamp}) {
  let classValue = "subject"
  if (isSingular) {classValue += " singular"}
  const reminders = remindersData.result
  for (let day of reminders) {
    for (let reminderArray of Object.values(day)) {
      if (Array.isArray(reminderArray)) {
        for (let reminder of reminderArray) {
          if (UnixStamp === reminder.date && trida === reminder.trida && cisloHodiny === reminder.subjectIndex && predmet === reminder.subject) {classValue += " active"}
        }
      }
    }
  }

  return (<div className={classValue} onClick={() => {
    setModalVisibility(!modalVisibility)
    setLatestSubjectClicked(predmet)
  }}>{predmet}</div>)
}

export default Subject

/*This component renders the Subject text (CH, M, INF...) and checks if any reminders match this unique subject in time. If so, add a class to make it green. */