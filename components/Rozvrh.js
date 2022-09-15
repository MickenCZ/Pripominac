import Cell from "../components/Cell"

function Rozvrh({trida, displayedDates, remindersData, setRemindersData}) {
  const generateProps = (day, poradoveCislo) => {
    return {
      trida:trida,
      displayedDates:displayedDates,
      day:day,
      poradoveCislo:poradoveCislo,
      remindersData:remindersData,
      setRemindersData:setRemindersData,
    }
  }
  return (<>
    <table id="table">
      <tbody>
      <tr id="cislaHodin">
        <th className="cisloHodiny"></th>
        <th className="cisloHodiny">1</th>
        <th className="cisloHodiny">2</th>
        <th className="cisloHodiny">3</th>
        <th className="cisloHodiny">4</th>
        <th className="cisloHodiny">5</th>
        <th className="cisloHodiny">6</th>
        <th className="cisloHodiny">7</th>
        <th className="cisloHodiny">8</th>
        <th className="cisloHodiny">9</th>
      </tr>
      <tr className="radekDnu">
        <td className="cell day">
          <div className="dayName">Po</div><div className="dateDay">{displayedDates.stringDates["monday"]}</div>
        </td>
        <Cell {...generateProps("monday", 0)} />
        <Cell {...generateProps("monday", 1)} />
        <Cell {...generateProps("monday", 2)} />
        <Cell {...generateProps("monday", 3)} />
        <Cell {...generateProps("monday", 4)} />
        <Cell {...generateProps("monday", 5)} />
        <Cell {...generateProps("monday", 6)} />
        <Cell {...generateProps("monday", 7)} />
        <Cell {...generateProps("monday", 8)} />
        
      </tr>
      <tr className="radekDnu">
        <td className="cell day"><div className="dayName">Út</div><div className="dateDay">{displayedDates.stringDates["tuesday"]}</div></td>
        <Cell {...generateProps("tuesday", 0)} />
        <Cell {...generateProps("tuesday", 1)} />
        <Cell {...generateProps("tuesday", 2)} />
        <Cell {...generateProps("tuesday", 3)} />
        <Cell {...generateProps("tuesday", 4)} />
        <Cell {...generateProps("tuesday", 5)} />
        <Cell {...generateProps("tuesday", 6)} />
        <Cell {...generateProps("tuesday", 7)} />
        <Cell {...generateProps("tuesday", 8)} />
      </tr>
      <tr className="radekDnu">
        <td className="cell day"><div className="dayName">St</div><div className="dateDay">{displayedDates.stringDates["wednesday"]}</div></td>
        <Cell {...generateProps("wednesday", 0)} />
        <Cell {...generateProps("wednesday", 1)} />
        <Cell {...generateProps("wednesday", 2)} />
        <Cell {...generateProps("wednesday", 3)} />
        <Cell {...generateProps("wednesday", 4)} />
        <Cell {...generateProps("wednesday", 5)} />
        <Cell {...generateProps("wednesday", 6)} />
        <Cell {...generateProps("wednesday", 7)} />
        <Cell {...generateProps("wednesday", 8)} />
      </tr>
      <tr className="radekDnu">
        <td className="cell day"><div className="dayName">Čt</div><div className="dateDay">{displayedDates.stringDates["thursday"]}</div></td>
        <Cell {...generateProps("thursday", 0)} />
        <Cell {...generateProps("thursday", 1)} />
        <Cell {...generateProps("thursday", 2)} />
        <Cell {...generateProps("thursday", 3)} />
        <Cell {...generateProps("thursday", 4)} />
        <Cell {...generateProps("thursday", 5)} />
        <Cell {...generateProps("thursday", 6)} />
        <Cell {...generateProps("thursday", 7)} />
        <Cell {...generateProps("thursday", 8)} />
      </tr>
      <tr className="radekDnu">
        <td className="cell day"><div className="dayName">Pá</div><div className="dateDay">{displayedDates.stringDates["friday"]}</div></td>
        <Cell {...generateProps("friday", 0)} />
        <Cell {...generateProps("friday", 1)} />
        <Cell {...generateProps("friday", 2)} />
        <Cell {...generateProps("friday", 3)} />
        <Cell {...generateProps("friday", 4)} />
        <Cell {...generateProps("friday", 5)} />
        <Cell {...generateProps("friday", 6)} />
        <Cell {...generateProps("friday", 7)} />
        <Cell {...generateProps("friday", 8)} />
      </tr>
      </tbody>
    </table>
  </>)
}
/*Rozvrh = timetable, trida = grade, poradoveCislo = index number*/
export default Rozvrh