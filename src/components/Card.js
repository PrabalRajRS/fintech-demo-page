import "./Card.scss";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src="./iconOne.png" />
      <p className="name">{item.name}</p>
      <p className="price">
        {item.price} / {item.totalPrice}
      </p>
      <div className="progress-bar">
        <div className="progress" style={{ width: "50%" }}></div>
      </div>
    </div>
  );
};

export default Card;
