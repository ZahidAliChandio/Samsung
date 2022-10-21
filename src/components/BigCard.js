import './BigCard.css'

const BigCard = ({ image, href }) => {
  return (
    <div id="card-container">
        <img src={image} alt="appliance" className="card-image"/>
        <a href={href}>Buy now</a>
    </div>
  );
};

export default BigCard;
