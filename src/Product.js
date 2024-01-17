import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ price, title, id, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addtoBasket = () => {
    console.log("this is the basket", basket);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addtoBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
