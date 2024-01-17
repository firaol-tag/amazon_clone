import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      <Header />
      <div className="Checkout">
        <div className="checkout-left">
          <img
            className="Checkout-ad"
            src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
            alt=""
          />
          <p>Hello,</p>
          <p className="checkout-title"> your shopping basket</p>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <div className="checkout-right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
