/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function MARS_ROVER_API({ date }) {
  const NASA_url = "https://api.nasa.gov/mars-photos/api/v1/";
  const API_KEY = "Q13qOhqlmIwXBrv56PROSrbeDYdw7D4A0OFRLKic";
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMarsRover() {
      setLoading(true);
      await fetch(
        `${NASA_url}rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data.photos[0]);
          setLoading(false);

        });
    }
    setTimeout(() => {
      fetchMarsRover();
    }, 5000);
  }, [date]);

  return (
    <div>
      {loading ? <h2>Loading</h2> : null}
      {data ? (
        <div>
          <h1>Mars Rover Picture of the Day</h1>
          <h2>CAMERA:{data?.camera.full_name}</h2>
          <h3>This Image corresponds to the date {date}</h3>
          {data?.img_src.indexOf("youtube") > -1 ? (
            <iframe width="420" height="315" src={data?.img_src}></iframe>
          ) : (
            <img src={data?.img_src} width="420" height="315" />
          )}
          <p>Rover: {data?.rover.name}</p>
        </div>
      ) : (
        <h2>No pics today</h2>
      )}
    </div>
  );
}
