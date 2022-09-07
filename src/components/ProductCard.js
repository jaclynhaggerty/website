import "./productCard.css";
import { Link } from "react-router-dom";
import StarRating from "./starRating";
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
        <Link to={`/details/${props.id}`}>
          <h3>{props.title}</h3>
        </Link>
        <StarRating />
        <h6>{props.price} euro</h6>
        <h6>{props.description}</h6>
        <div className="products-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fillRule="currentColor"
            className="row"
          >
            <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fillRule="currentColor"
            className="row"
          >
            <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fillRule="currentColor"
            className="row"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
