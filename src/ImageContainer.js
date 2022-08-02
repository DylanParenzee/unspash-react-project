import React from "react";

const ImageContainer = (props) => {
  return (
    <div className="image-container">
      <h1>Image</h1>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default ImageContainer;
