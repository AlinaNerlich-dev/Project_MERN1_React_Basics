/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function API({ date }) {
  const NASA_url = "https://api.nasa.gov/";
  const API_KEY = "Q13qOhqlmIwXBrv56PROSrbeDYdw7D4A0OFRLKic";
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [copyright, setCopyright] = useState("");
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    async function fetchAPODAPI() {
      await fetch(`${NASA_url}planetary/apod?date=${date}&api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          setTitle(data.title),
            setImage(data.url),
            setCopyright(data.copyright);
          setExplanation(data.explanation);
        });
    }
    fetchAPODAPI();
  }, [date]);

  return (
    <div>
      <h1>Astronomical Picture of the Day</h1>
      <h2>{title}</h2>
      <h3>This Image corresponds to the date {date}</h3>

      {image.indexOf("youtube") > -1 ? (
        <iframe width="420" height="315" src={image}></iframe>
      ) : (
        <img src={image} alt={title} width="420" height="315"/>
      )}
      <p>{copyright}</p>
      <p>{explanation}</p>
    </div>
  );
}
