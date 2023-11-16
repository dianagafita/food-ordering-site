import {
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import React, { useEffect } from "react";
import { pay } from "../../Services/orderService";
import { useCart } from "../../hooks/useCart";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function PaypalButtons({ order }) {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AcL4e9C5Tcpm0U7DLPQ-Y9MGRkVVBrq1NTQ3-CBGErtl58wLNYH76IjHyqBKCk8T9O_GF3xItpItNHlu",
      }}
    >
      <Buttons order={order} />
    </PayPalScriptProvider>
  );
}

function Buttons({ order }) {
  //   const [{isPending}] = usePayPalScriptReducer();
  // const {} = useLoad
  // useEffect(()=>{isPending? showLoading()})
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: order.totalPrice,
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    try {
      const payment = await actions.order.capture();
      const orderId = await pay(payment.id);
      clearCart();
      toast.success("Payment Saved Succesfully", "Success");
      navigate("/track/" + orderId);
    } catch (error) {
      toast.error("Payment Save Failed", "Error");
    }
  };

  const onError = (err) => {
    toast.err("Payment Failed", "Error");
  };
  return (
    <PaypalButtons
      createOrder={createOrder}
      onApprove={onApprove}
      onError={onError}
    />
  );
}
