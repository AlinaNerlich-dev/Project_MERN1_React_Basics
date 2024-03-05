/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { callAPI } from "./functions";

export default function API({ date }) {
  const NASA_url = "https://api.nasa.gov/planetary/apod?date=";
  const API_KEY = "Q13qOhqlmIwXBrv56PROSrbeDYdw7D4A0OFRLKic";

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(async ()=>{
      const response = await callAPI(NASA_url, API_KEY, date);
      setData(response);
      console.log(response)
      setLoading(false);
    }, 5000)
  }, [date]);

  return (
    <>
    {loading && <div>Loading...</div>}
    {data && (
      <div>
      <h1>Astronomical Picture of the Day</h1>
      <h2>{data?.title}</h2>
      <h3>This Image corresponds to the date {date}</h3>
      
      {data.url.indexOf("youtube") > -1 ? (
        <iframe width="420" height="315" src={data?.url}></iframe>
      ) : (
        <img src={data?.url} alt={data?.title} width="420" height="315"/>
      )}
      <p>{data?.copyright}</p>
      <p>{data?.explanation}</p>
    </div>)}
    {(!loading && !data) && <h2>No pics today</h2>}
    </>
  );
}
