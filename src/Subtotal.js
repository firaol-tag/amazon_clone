import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const getBaskeTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <div>
              <p>
                subtotal({basket.length} items):<strong>{value}</strong>
              </p>
              <small className="subtotal-gift">
                <input type="checkbox" /> this order contain a gift
              </small>
            </div>
          );
        }}
        decimalScale={2}
        value={getBaskeTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
