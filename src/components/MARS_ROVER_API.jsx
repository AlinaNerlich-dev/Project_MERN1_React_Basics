/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { callAPI } from "./functions"

export default function MARS_ROVER_API({ date }) {
  const NASA_url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=";
  const API_KEY = "Q13qOhqlmIwXBrv56PROSrbeDYdw7D4A0OFRLKic";

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setData(null)
    setTimeout(async () => {
      const response = await callAPI(NASA_url, API_KEY, date);
      setData(response.photos[0]);
      setLoading(false)
    }, 5000);
  }, [date]);

  return (
    <div>
       {loading && <h2>Loading...</h2>}
      {data && (
        <div>
          <h1>Mars Rover Picture of the Day</h1>
          <h2>CAMERA:{data.camera.full_name}</h2>
          <h3>This Image corresponds to the date {date}</h3>
          {data?.img_src.indexOf("youtube") > -1 ? (
            <iframe width="420" height="315" src={data?.img_src}></iframe>
          ) : (
            <img src={data?.img_src} width="420" height="315" />
          )}
          <p>Rover: {data?.rover.name}</p>
        </div>
      )}
       {(!loading && !data) && <h2>No pics today</h2>}
  
    </div>
  );
}
