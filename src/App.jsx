import "./App.css";
import { useState } from "react";
import APOD_API from "./components/APOD_API";
import MARS_ROVER_API from "./components/MARS_ROVER_API";

function App() {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [selectedAPI, setSelectedAPI] = useState("APOD");
  const [data, setData] = useState();
  const [loading, setLoading]=useState(false);

  function handleDateInput(event) {
    setDate(event.target.value.toLocaleString());
  }

  async function callAPI(URL, API_KEY){
    setLoading(true);
    await fetch(`${URL}planetary/apod?date=${date}&api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
     setData(data);
     setLoading(false);
    });

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
      {loading ? (<h2>Loading</h2>) : (selectedAPI == "APOD" ? (
        <APOD_API date={date} apiCall={callAPI} data={data}/>
      ) : (
        <MARS_ROVER_API date={date} apiCall={callAPI} data={data}/>
      ))}
      
     
    </>
  );
}

export default App;
