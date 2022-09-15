
function Reminder({type, text}) {
  const renderType = {
    "test":"Test",
    "domaciUkol":"Domácí úkol",
    "ostatni":"Ostatní",
    "akce":"Akce"
  }
  return (<div className="reminder">
    {renderType[type]} - {text}
  </div>)
}

export default Reminder