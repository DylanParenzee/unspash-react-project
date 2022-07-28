import React from "react";

const ImageContainer = (props) => {
  return (
    <div>
      <h1>Image</h1>
      <img src={props.src} alt="" />
    </div>
  );
};

export default ImageContainer;
