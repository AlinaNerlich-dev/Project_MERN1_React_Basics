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
    setTimeout(async () => {
      const response = await callAPI(NASA_url, API_KEY, date);
      console.log(response);
      // store data.photos[0] in a seperate variable to avoid redudant code within JSX
      setData(response);
      setLoading(false)
    }, 5000);
  }, [date]);

  return (
    <div>
       {loading && <div>Loading...</div>}
      {(data?.photos?.length > 0) ? (
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
      ) : (<h2>No pics today</h2>)}
  
    </div>
  );
}
