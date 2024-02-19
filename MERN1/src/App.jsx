import './App.css'
import { useState } from 'react';
import API from './API';

function App() {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [date, setDate] = useState(today)

  function handleDateInput(event){
   setDate(event.target.value.toLocaleString())
  }

  return (
    <>
    <div id="user-input-wrapper">
      <div id="date">
        <h4>Choose a date you want to look up...</h4>
        <input type="date" onChange={handleDateInput} max={today}/>
      </div>
      <div id="pic">
          <h4 htmlFor="pic-select">Choose which pic of the day you would like to see:</h4>
          <select name="pics" id="pic-select">
            <option value="">--Please choose an option--</option>
            <option value="APOD">APOD</option>
            <option value="Mars_Rover">Mars Rover</option>
          </select>
        </div>
      </div>
      <API date={date}/>
    </>
  )
}

export default App