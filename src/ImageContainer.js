import React from "react";

const ImageContainer = (props) => {
  return (
    <div className="photo-container">
      <article className="photo">
        <img src={props.urls.regular} alt={props.alt_description} />
      </article>
    </div>
  );
};

export default ImageContainer;
