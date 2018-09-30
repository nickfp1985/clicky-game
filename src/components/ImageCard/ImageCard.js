import React from "react";
import "./ImageCard.css";

const ImageCard = ({id, name, image, handleImageClick}) => (
  <div className="card" onClick={handleImageClick}>
    <div className="img-container">
      <img alt={name} src={image} key={id} name={name} onClick={handleImageClick} />
    </div>
  </div>
);

export default ImageCard;
