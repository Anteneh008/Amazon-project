import React from "react";
import "./SubTotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../StateProvider/StateProvider";
import { useNavigate } from "react-router-dom";


function SubTotal() {
  const [{basket}, dispatch] = useStateValue();
  const navigate = useNavigate();
  
  // amount = total item = num
  const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length}items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button onClick={(e) => navigate('/payment')}>Proceed to checkout</button>
    </div>
  );
}

export default SubTotal;

