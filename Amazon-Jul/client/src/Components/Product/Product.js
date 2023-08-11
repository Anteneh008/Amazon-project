import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider/StateProvider";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Product({ id, title, image, price, rating, onProductClick }) {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  console.log(useStateValue());

  console.log("This is the basket", basket);

  const addToBasket = () => {
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

  function truncateTitle(title, wordCount) {
    const words = title.split(" ");
    if (words.length <= wordCount) {
      return title;
    }
    return words.slice(0, wordCount).join(" ") + " ...";
  }

  const handleProductClick = () => {
    // Navigate to the DetailExplanation component with the selected product's ID
    navigate(`/detail/${id}`);
  };
  return (
    <div className="product" key={id} >
      <div className="product__info" onClick={handleProductClick}>
        <TruncatedParagraph>{truncateTitle(title, 12)}</TruncatedParagraph>
        <p className="product__price">
          <PriceTag>${parseInt(price)}</PriceTag>
          {price % 1 !== 0 && (
            <Cents>{(price % 1).toFixed(2).substring(2)}</Cents>
          )}
        </p>
        <div className="product__rating">
          {Array(Math.floor(rating))
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

const PriceTag = styled.span`
  padding: 2px 5px;
  font-size: 16px;
  font-weight: 700;
  color: #111;
  margin-right: 0px;
`;

const Cents = styled.sup`
  font-size: 0.9em;
  vertical-align: super;
`;

const TruncatedParagraph = styled.p`
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
`;
