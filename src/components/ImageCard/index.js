export { default } from "./ImageCard";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card" onClick={() => props.removeFriend(props.id)} className="remove">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default ImageCard;
