import React from "react";
import "./CheckOut.css";
import SubTotal from "../../Components/SubTotal/SubTotal";
import CheckOutProduct from "../../Components/CheckOutProduct/CheckOutProduct";
import { useStateValue } from "../../Components/StateProvider/StateProvider";

function CheckOut() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://gos3.ibcdn.com/top-1568020025.jpg"
          alt=""
        />
        <h3>Hello {user?.email}</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>
        {basket.map((item) => (
          <CheckOutProduct 
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
        ))}
        
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default CheckOut;
