import "./App.css";
import { useState } from "react";
import APOD_API from "./APOD_API";
import MARS_ROVER_API from "./MARS_ROVER_API";

function App() {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [selectedAPI, setSelectedAPI] = useState("APOD");

  function handleDateInput(event) {
    setDate(event.target.value.toLocaleString());
  }

  return (
    <>
      <div id="user-input-wrapper">
        <div id="date">
          <h4>Choose a date you want to look up...</h4>
          <input type="date" onChange={handleDateInput} max={today} />
        </div>
        <div id="api">
          <h4 htmlFor="api-select">
            Choose which pic of the day you would like to see:
          </h4>
          <select
            name="pics"
            id="api-select"
            onChange={(e) => setSelectedAPI(e.target.value)}
          >
            <option value="APOD">APOD</option>
            <option value="Mars_Rover">Mars Rover</option>
          </select>
        </div>
      </div>
      {selectedAPI == "APOD" ? (
        <APOD_API date={date} />
      ) : (
        <MARS_ROVER_API date={date} />
      )}
    </>
  );
}

export default App;
