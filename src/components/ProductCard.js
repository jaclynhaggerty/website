import "./productCard.css";

export default function ProductCard(props) {
  return (
    <div className="product">
      <div className="product-image">
        <img
          style={{ width: 100, height: 120 }}
          src={props.mainImage}
          alt="not found"
        />
      </div>{" "}
      <div className="card-writting">
        <h3>{props.title}</h3>
        <h6>{props.price} euro</h6>
        <h6>{props.description}</h6>
      </div>
    </div>
  );
}
