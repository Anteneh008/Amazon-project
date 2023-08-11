import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "../StateProvider/StateProvider";
import styled from "styled-components";

function CheckOutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const validRating = Number.isInteger(rating) && rating > 0;
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <PriceTag>${parseInt(price)}</PriceTag>
          {price % 1 !== 0 && (
            <Cents>{(price % 1).toFixed(2).substring(2)}</Cents>
          )}
        </p>
        <div className="checkoutProduct__rating">
        {validRating &&
            Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
        </div>

        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckOutProduct;

const PriceTag = styled.span`
  padding: 2px 5px;
  font-size: 20px;
  font-weight: 700;
  color: #111;
  margin-right: 0px;
`;

const Cents = styled.sup`
  font-size: 0.9em;
  vertical-align: super;
`;
