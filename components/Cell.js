import { useState } from "react"
import renderCell from "../functions/renderCell"
import Modal from "../components/Modal"
import rozvrh from "../static vars/rozvrh"
//CSS for cells is in Rozvrh.css because it belongs together

function Cell({trida, day, poradoveCislo, displayedDates, remindersData, setRemindersData}) {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [latestSubjectClicked, setLatestSubjectClicked] = useState("error")
  /*I store the latest subject clicked and show it as the subject in the modal, it is simpler than getting the data from the component
  RenderCell is just a function that returns appropriate JSX with the Subject components.
  */

  return (<>
  <td className="cell">{renderCell(rozvrh, trida, day, poradoveCislo, modalVisibility, setModalVisibility, setLatestSubjectClicked, remindersData, displayedDates.UnixDates[day])}</td>
  <Modal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} subject={latestSubjectClicked} poradoveCislo={poradoveCislo} UnixStamp={displayedDates.UnixDates[day]} trida={trida} remindersData={remindersData} setRemindersData={setRemindersData} />
  </>)
}

/*The condition whether or not Modal is displayed is handled in that component directly with the && operator.*/

export default Cell