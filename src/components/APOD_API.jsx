/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function API({ date }) {
  const NASA_url = "https://api.nasa.gov/";
  const API_KEY = "Q13qOhqlmIwXBrv56PROSrbeDYdw7D4A0OFRLKic";
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchAPODAPI() {
      await fetch(`${NASA_url}planetary/apod?date=${date}&api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
         setData(data)
        });
    }
    setTimeout(()=>{
      fetchAPODAPI();
    }, 2000)

  }, [date]);

  return (
    <>
    {data ? (
      <div>
      <h1>Astronomical Picture of the Day</h1>
      <h2>{data?.title}</h2>
      <h3>This Image corresponds to the date {date}</h3>
      
      {data?.url.indexOf("youtube") > -1 ? (
        <iframe width="420" height="315" src={data?.url}></iframe>
      ) : (
        <img src={data?.url} alt={data?.title} width="420" height="315"/>
      )}
      <p>{data?.copyright}</p>
      <p>{data?.explanation}</p>
    </div>
    ) : (
      <div>LOADING...</div>
    )}
    </>

  );
}
