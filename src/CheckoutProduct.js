import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, price, image, title, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removefrombasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };
  return (
    <div className="CheckoutProduct">
      <img className="CheckoutProduct_image" src={image} alt="" />
      <div className="CheckoutProduct_info">
        <p className="CheckoutProduct_title">{title}</p>
        <p className="CheckoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removefrombasket}> remove from basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
