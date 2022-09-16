import { useState } from "react"
import Tridy from "../components/Tridy"
import Rozvrh from "../components/Rozvrh"
import LeftArrow from "../components/LeftArrow"
import RightArrow from "../components/RightArrow"
import getCurrentWeek from "../functions/dates/getCurrentWeek"
import getLessonDates from "../functions/dates/getLessonDates"

function MainSection({staticReminders}) {
  const [trida, setTrida] = useState("8V")
  const [remindersData, setRemindersData] = useState(staticReminders) //Dont worry about null, in Rozvrh.js, useEffect is used to fetch data to it
  const [weekIndex, setWeekIndex] = useState(0)//0 - current, -1 yesterweek, 1 next week etc.
  const [displayedDates, setDisplayedDates] = useState({
    stringDates:getLessonDates(getCurrentWeek()),
    UnixDates:getCurrentWeek()
  });
  /*You have to use these two together, otherwise the data for the computer (unix time) and the info for the user (date) will go out of sync*/
  return (<>
    <Tridy setTrida={setTrida} />
    <div className="middleWrapper">
      <LeftArrow setDisplayedDates={setDisplayedDates} displayedDates={displayedDates} weekIndex={weekIndex} setWeekIndex={setWeekIndex} setRemindersData={setRemindersData}/>
      <Rozvrh trida={trida} displayedDates={displayedDates} remindersData={remindersData} setRemindersData={setRemindersData} />
      <RightArrow setDisplayedDates={setDisplayedDates} displayedDates={displayedDates} weekIndex={weekIndex} setWeekIndex={setWeekIndex} setRemindersData={setRemindersData}/>
    </div>
  </>)
}

export default MainSection