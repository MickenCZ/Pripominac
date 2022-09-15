function Tridy({setTrida}) {
  return (<main id="main">
    <section id="grades">
      <button className="gradeButton" onClick={() => setTrida("1V")}>1.V</button>
      <button className="gradeButton" onClick={() => setTrida("2V")}>2.V</button>
      <button className="gradeButton" onClick={() => setTrida("3V")}>3.V</button>
      <button className="gradeButton" onClick={() => setTrida("4V")}>4.V</button>
      <button className="gradeButton" onClick={() => setTrida("5V")}>5.V</button>
      <button className="gradeButton" onClick={() => setTrida("6V")}>6.V</button>
      <button className="gradeButton" onClick={() => setTrida("7V")}>7.V</button>
      <button className="gradeButton" onClick={() => setTrida("8V")}>8.V</button>
      <button className="gradeButton" onClick={() => setTrida("1A")}>1.A</button>
      <button className="gradeButton" onClick={() => setTrida("2A")}>2.A</button>
      <button className="gradeButton" onClick={() => setTrida("3A")}>3.A</button>
      <button className="gradeButton" onClick={() => setTrida("4A")}>4.A</button>
    </section>
  </main>)
}
/*Onclick changes the state in Mainsection.js, which controls the data displayed in the timetable */
export default Tridy