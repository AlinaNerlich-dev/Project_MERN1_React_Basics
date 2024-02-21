/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function MARS_ROVER_API({ date }) {
  const NASA_url = "https://api.nasa.gov/mars-photos/api/v1/";
  const API_KEY = "Q13qOhqlmIwXBrv56PROSrbeDYdw7D4A0OFRLKic";
  const [camera, setCamera] = useState("");
  const [image, setImage] = useState("");
  const [rover, setRover] = useState("");

  useEffect(() => {
    async function fetchMarsRover() {
      await fetch(
        `${NASA_url}rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setCamera(data.photos[0].camera.full_name),
            setImage(data.photos[0].img_src),
            setRover(data.photos[0].rover.name);
        });
    }
    fetchMarsRover();
  }, [date]);

  return (
    <div>
      {image ? (
        <div>
          <h1>Mars Rover Picture of the Day</h1>
          <h2>CAMERA:{camera}</h2>
          <h3>This Image corresponds to the date {date}</h3>
          {image.indexOf("youtube") > -1 ? (
            <iframe width="420" height="315" src={image}></iframe>
          ) : (
            <img src={image} width="500px" height="350px"/>
          )}
          <p>Rover: {rover}</p>
        </div>
      ) : (
        <h2>No pics on this day - try another date</h2>
      )}
    </div>
  );
}
