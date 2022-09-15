import incrementWeek from "../functions/dates/incrementWeek"
import getMonday from "../functions/dates/getMonday"
import Image from "next/image"

function RightArrow({setDisplayedDates, displayedDates, weekIndex, setWeekIndex, setRemindersData }) {
  let weekIndexLimit = 3
  const reachedLimits = new Set()
  return (<div className="arrow" onClick={
    () => {
      setWeekIndex(prev => prev + 1)
      if (weekIndex === weekIndexLimit  && !reachedLimits.has(weekIndex)) {
        const monday = Math.floor(getMonday(Date.now()) / 86400000)
        const options = {
          method:"POST",
          mode:"cors",
          cache:"no-cache",
          credentials:"same-origin",
          headers:{
            "Content-Type":"application/json"
          },
          redirect:"follow",
          referrerPolicy:"no-referrer",
          body: JSON.stringify({"monday":monday, "limit":weekIndexLimit})
        }
        fetch("/api/moreDates", options).then(data => data.json()).then(data => setRemindersData(prev => {
          return {result:[...prev.result, ...data.result]}
        }))
        reachedLimits.add(weekIndexLimit)
        weekIndexLimit += 5
      }
      setDisplayedDates(incrementWeek(displayedDates))
    }
  }>
    <Image src="/arrow.png" alt="right arrow" width="100px" height="100px" ></Image>
    </div>
    )
}

/*When you load the website, only 5 weeks are loaded (last, this, and 3 next ones). The current week has an "index" of 0, and is incremented with time. If you wish to go further than that preloaded 3, you "break the limit" (if statement). You generate a Monday to uniquely identify a week and send it together with the limit to the server. It gives you 5 more weeks. The limit is changed by 5. Additional logic with a set is in place to make sure you dont fetch the same data twice.*/

export default RightArrow