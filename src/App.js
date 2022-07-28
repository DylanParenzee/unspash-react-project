import React, { useEffect } from "react";
import "./index.css";
import NavBar from "./NavBar";
import { useState } from "react";
import ImageContainer from "./ImageContainer";

const App = () => {
  const [images, setImages] = useState([]);
  const accessKey = "Gl9gxcrGbgAsfxKYvsEZAd7DVGWj2C9GLrPc89oJdew";
  const fetchImages = () => {
    fetch("https://api.unsplash.com/photos/?client_id=" + accessKey)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        console.log(images);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="App">
      <NavBar />
      {/* image display  */}
      <div className="images-container">
        {images.map((image) => {
          return (
            <ImageContainer
              className="individual-image"
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
