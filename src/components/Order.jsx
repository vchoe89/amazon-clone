import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../context/StateProvider";
import { RiCheckboxCircleFill } from "react-icons/ri";
const Order = ({}) => {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log(basket);
  return (
    <div className="order">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
          alt="/"
        />
      </div>
      <div className="thankYou__container">
        <div className="checkbox">
          <RiCheckboxCircleFill size={20} className="checkbox__icon" />
        </div>
        <div className="details__container">
          <div className="details__title">
            <h1>Your order has been placed! Thank you.</h1>
            <p>Confirmation will be sent to your email.</p>
            <span>Shipping to {user?.email}.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

{
  /* <h2>Order</h2>
<p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
<p className="order__id">
  <small>{order.id}</small>
</p>
{order.data.basket?.map((item) => (
  <CheckoutProduct
    id={item.id}
    title={item.title}
    image={item.image}
    price={item.price}
    rating={item.rating}
  />
))} */
}
