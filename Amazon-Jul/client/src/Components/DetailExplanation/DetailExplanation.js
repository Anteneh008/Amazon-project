import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import products from "./SampleProduct";
import { useStateValue } from "../StateProvider/StateProvider";
import ImageMagnify from "react-image-magnify";

function DetailExplanation() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  console.log(id);

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

  useEffect(() => {
    // Simulate fetching product data from the products object based on the ID
    if (products[id]) {
      setProductData(products[id]);
    } else {
      // If the product data is not found, navigate to checkout directly
      navigate("/checkout");
    }
  }, [id]);

  if (!productData) {
    // Navigating to checkout if product data is not available
    navigate("/checkout");
    return null;
  }


  const { title, rating, ratingCount, price, description, image } = productData;
  return (
    <DetailContainer>
      <ImageContainer>
        <ImageMagnify
          {...{
            smallImage: {
              alt: title,
              isFluidWidth: true,
              src: image,
            },
            largeImage: {
              src: image,
              width: 1200,
              height: 1800,
            },
          }}
        />
        {/* <ProductImage src={image} alt={title} /> */}
      </ImageContainer>
      <ExplanationContainer>
        <ProductTitle>{title}</ProductTitle>
        <RatingContainer>
          <RatingStars>{rating} ⭐️</RatingStars>
          <RatingCount>{ratingCount}</RatingCount>
        </RatingContainer>
        <Price>${price}</Price>
        <Description>
          {description}
          {/* Add more description here */}
        </Description>
        <Button onClick={addToBasket}>Add to Cart</Button>
      </ExplanationContainer>
    </DetailContainer>
  );
}

export default DetailExplanation;

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;

const ExplanationContainer = styled.div`
  flex: 2;
  padding: 20px;
`;

const ProductTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RatingStars = styled.p`
  margin-right: 10px;
`;

const RatingCount = styled.p`
  color: gray;
`;

const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  line-height: 1.5;
`;

const Button = styled.button`
  background: #fed814;
  width: 70%;
  border: none;
  border-radius: 10px;
  padding: 10px 35px;
  margin-top: 70px;
  color: #111;
  font-size: 18px;
  padding: 15px 0px;

  &:hover {
    background: #f7ca00;
    cursor: pointer;
  }
`;
