import React from "react";
import "./ImageCard.css";

const ImageCard = ({id, name, image, handleImageClick}) => (
  <div className="card" onClick={() => handleImageClick(id)}>
    <div className="img-container">
      <img alt={name} src={image} />
    </div>
  </div>
);

export default ImageCard;
