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
      <input type="date" onChange={handleDateInput}/>
      <API date={date}/>
    </>
  )
}

export default App