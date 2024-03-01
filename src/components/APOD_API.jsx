/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

export default function API({ date, apiCall, data }) {
  const NASA_url = "https://api.nasa.gov/";
  const API_KEY = "Q13qOhqlmIwXBrv56PROSrbeDYdw7D4A0OFRLKic";


  useEffect(() => {
    setTimeout(()=>{
      apiCall(NASA_url, API_KEY);
    }, 5000)

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
    ) : (<h2>No pics today</h2>)}
    </>
  );
}
