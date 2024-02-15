/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function API({ date }) {
    const NASA_url = "https://api.nasa.gov/";
    const API_KEY = "HPfkh8ujwPSQoQ3cGbUDy40f0prRO6ztf4Yih05l";
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [copyright, setCopyright] = useState("");
    const [explanation, setExplanation] = useState("");

    useEffect(() => {
         fetch(`${NASA_url}planetary/apod?date=${date}&api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => 
            {   setTitle(data.title), 
                setImage(data.url),
                setCopyright(data.copyright)
                setExplanation(data.explanation)
            }
        )
    },[])


  return (
    <div>
        <h1>Astronomical Picture of the Day</h1>
        <h2>{title}</h2>
        <h3>This Image corresponds to the date {date}</h3>
        <img src={image} alt="" />
        <p>{copyright}</p>
        <p>{explanation}</p>
    </div>
  )
}
