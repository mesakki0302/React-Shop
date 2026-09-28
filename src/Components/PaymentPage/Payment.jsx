import React, { useContext } from "react";
import axios from "axios";
import { CartContext } from "../Context/Cartcontext";
import "./Payment.css";

function Payment() {

  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  const payNow = async () => {

    const { data } = await axios.post(
      "http://localhost:5000/api/create-order"
    );


    const options = {

      key: data.key,

      amount: data.amount,

      currency: "INR",

      order_id: data.orderId,

      name: "My E-Commerce",

      description: "Product Payment",


      handler: async (response) => {

        const result = await axios.post(
          "http://localhost:5000/api/verify",
          response
        );

        if (result.data.success) {
          alert("Payment Successful!");
        }

      }

    };


    const razorpay =
      new window.Razorpay(options);

    razorpay.open();

  };


  return (

    <div className="payment-page">

      <div className="payment-box">

        <h1>Payment Page</h1>

        <h2>
          Total: ₹ {totalPrice}
        </h2>

        <button
          className="pay-btn"
          onClick={payNow}
        >
          Pay Now
        </button>

      </div>

    </div>

  );
}

export default Payment;


