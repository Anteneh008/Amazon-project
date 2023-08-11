import styled from "styled-components";// npm i styled-components
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React from "react";

function ImgSlider(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img
            src="https://m.media-amazon.com/images/I/61mNECvgEfL._SX3000_.jpg"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://m.media-amazon.com/images/I/51j9Jz-VaKL._SX3000_.jpg"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://m.media-amazon.com/images/I/71mXZ5RCedL._SX3000_.jpg"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://m.media-amazon.com/images/I/61JC8D9zsRL._SX3000_.jpg"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://m.media-amazon.com/images/I/61HBeh4tctL._SX3000_.jpg"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
            alt=""
          />
        </a>
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100%;
  /* z-index: -1; */
  margin-bottom: -260px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    height: 50vh;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
      border: 4px solid white;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
    &:hover {

    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: 5px;
    top: 180px;
  }

  .slick-next {
    right: 5px;
    top: 180px;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  a {
    cursor: pointer;
    display: block;
    position: relative;
    overflow-y: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%; /* Adjust this value to control the fade height */
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
      );
      z-index: 1;
    }

    &:hover {
      padding: 0;
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
