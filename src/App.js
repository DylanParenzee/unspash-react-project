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
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setImages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(`${error} - unable to load data`);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
  };

  return (
    <main>
      <section className="title">
        <h1 className="title-words">Unsplash API</h1>
      </section>
      <section className="search">
        <form action="" className="search-form">
          <input
            type="text"
            placeholder="Search Photos"
            className="form-input"
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Search
          </button>
        </form>
      </section>
    </main>
  );
};

export default App;
