  import Subject from "../components/Subject"
  
  function renderCell(rozvrh, trida, den, cisloHodiny, modalVisibility, setModalVisibility, setLatestSubjectClicked, remindersData, UnixStamp) {
  let subjects = rozvrh[trida][den][cisloHodiny] //It is either null if none, or an array of strings if its not
  if (subjects === null) {
    return <div className="singular empty"></div>
  }
  else if (subjects.length >= 1) {
    let result = []
    for (let i = 0; i < subjects.length; i++) {
      let predmet = subjects[i]
      let isSingular = false
      if (subjects.length === 1) {isSingular = true}
      result.push(<Subject modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} setLatestSubjectClicked={setLatestSubjectClicked} predmet={predmet} indexInCell={i} key={i} isSingular={isSingular} trida={trida} cisloHodiny={cisloHodiny} remindersData={remindersData} UnixStamp={UnixStamp} />)
    }
    if (subjects.length === 1) {return <div className="subject">{result}</div>} 
    if (subjects.length === 2) {return <div className="multiple two">{result}</div>}
    if (subjects.length === 3) {return <div className="multiple three">{result}</div>}
    if (subjects.length === 4) {return <div className="multiple four">{result}</div>}
    if (subjects.length === 5) {return <div className="multiple five">{result}</div>}
  }
}

/*Each individual subject has to update the latest subject clicked. It also has to display the modal. The location is the same for all modals, data is just changed by passing different state. More in Modal.js Also look at rozvrh.js, in "../", its shape is vital for this function. If this function fails, the shape has been changed incorrectly.*/

export default renderCell