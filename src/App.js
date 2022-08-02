import React, { useEffect } from "react";
import "./index.css";
import NavBar from "./NavBar";
import { useState } from "react";
import ImageContainer from "./ImageContainer";
const accessKey = process.env.REACT_APP_ACCESS_KEY;

const mainUrl = "https://api.unsplash.com/photos";
const searchUrl = "https://api.unsplash.com/search/photos";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    setLoading(true);
    let url;
    url = `${mainUrl}${accessKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Photos</h1>
    </div>
  );
};

export default App;
