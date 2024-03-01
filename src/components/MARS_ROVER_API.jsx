/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {useEffect } from "react";

export default function MARS_ROVER_API({ date, apiCall, data }) {
  const NASA_url = "https://api.nasa.gov/mars-photos/api/v1/";
  const API_KEY = "Q13qOhqlmIwXBrv56PROSrbeDYdw7D4A0OFRLKic";

  useEffect(() => {
    setTimeout(()=>{
      apiCall(NASA_url, API_KEY);
    }, 5000)
  }, [date]);

  return (
    <div>
      {data ? (
        <div>
          <h1>Mars Rover Picture of the Day</h1>
          <h2>CAMERA:{data.camera.full_name}</h2>
          <h3>This Image corresponds to the date {date}</h3>
          {data.img_src.indexOf("youtube") > -1 ? (
            <iframe width="420" height="315" src={data?.img_src}></iframe>
          ) : (
            <img src={data.img_src} width="420" height="315" />
          )}
          <p>Rover: {data.rover.name}</p>
        </div>
      ) : (
        <h2>No pics today</h2>
      )}
    </div>
  );
}
