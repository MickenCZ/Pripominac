import ReactDOM from "react-dom"
import { useState } from "react"
import postData from "../functions/postData"
import Reminders from "./Reminders"

function Modal({modalVisibility, setModalVisibility, subject, poradoveCislo, UnixStamp, trida, remindersData, setRemindersData}) {
  const [reminderType, setReminderType] = useState("test")
  const [textareaValue, setTextareaValue] = useState("") //controlled form
  const [validationErrorVisibility, setValidationErrorVisibility] = useState(false);
  const handleSubmit = event => {
    event.preventDefault()
    if (textareaValue.length <= 3 || textareaValue.length >= 100) {
      setValidationErrorVisibility(true)
      return
    }
    const reqBody = {
      "reminderType":reminderType,
      "description":textareaValue,
      "subjectIndex":poradoveCislo,
      "date":UnixStamp,
      "subject":subject,
      "trida":trida
    }
    setRemindersData({result:[...remindersData.result, {"client":[reqBody]}]})
    //front-end only update to remindersData so you dont have to refresh. When you do, it is already in DB.
    setTextareaValue("") //Reset form
    setReminderType("test")
    //goes back to defaults
    postData(reqBody, "/api/postForm")
  }

  /*If modalVisibility is false, do nothing. If its true, create a portal that renders a modal parallel to the root of this component tree. Check html file #portal. */
  return modalVisibility && ReactDOM.createPortal(
  <div id="modal" onClick={event => {
    if (event.target.id === "modal") {//this is so that if you click outside, it closes it
      setModalVisibility(!modalVisibility)
    }
  }}>
    <div id="modalBody">
      <form method="POST" id="form" onSubmit={handleSubmit}>
        <header id="header">
          <label htmlFor="types" id="typesLabel">Vyber typ upomínky:</label>
          <div id="subject">{subject}</div>
        </header>
        <select name="types" id="types" value={reminderType} onChange={e => setReminderType(e.target.value)}>
          <option value="test" >Test</option>
          <option value="domaciUkol" >Domácí úkol</option>
          <option value="akce" >Akce</option>
          <option value="ostatni" >Ostatní</option>
        </select>
        <label htmlFor="textarea" id="textareaLabel" required>Zadej text upomínky:</label>
        <div className="flex">
          <textarea name="textarea" id="textarea" rows="3" placeholder="Stručně vystihněte obsah sdělení" required value={textareaValue} onChange={e => {setTextareaValue(e.target.value); setValidationErrorVisibility(false)}} ></textarea>
          <button id="submit" type="submit">Poslat</button>
        </div>
        {validationErrorVisibility && <p id="valError">Zvolte přiměřenou délku</p>}
      </form>
      <div id="remindersHeader">Upomínky této hodiny:</div>
      <Reminders remindersData={remindersData} UnixStamp={UnixStamp} trida={trida} poradoveCislo={poradoveCislo} subject={subject} />
    </div>
  </div>, document.getElementById("portal"))
}

export default Modal