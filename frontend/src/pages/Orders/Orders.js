import React, { useEffect, useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import DateTime from "../../components/DateTime/DateTime";
import Price from "../../components/Price/Price";
import { getAll } from "../../Services/orderService";
import classes from "./Orders.module.css";
import NotFound from "../../components/Notfound/NotFound";

const initialState = {};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ORDERS_FETCHED":
      return { ...state, orders: payload };
    default:
      return state;
  }
};

export default function OrdersPage() {
  const [{ orders }, dispatch] = useReducer(reducer, initialState);
  const { filter } = useParams();

  useEffect(() => {
    getAll(filter).then((orders) => {
      dispatch({ type: "ORDERS_FETCHED", payload: orders });
    });
  }, [filter]);

  return (
    <div className={classes.container}>
      <Title title="Orders" margin="1.5rem 0 0 .2rem" fontSize="1.9rem" />

      {orders?.length === 0 && (
        <NotFound
          linkRoute={filter ? "/orders" : "/"}
          linkText={filter ? "Show All" : "Go To Home Page"}
        />
      )}

      {orders &&
        orders.map((order) => (
          <div key={order.id} className={classes.order_summary}>
            <div className={classes.header}>
              <span>{order.id}</span>
              <span>
                <DateTime date={order.createdAt} />
              </span>
              <span className={classes.status}>{order.status}</span>
            </div>
            <div className={classes.items}>
              {order.items.map((item) => (
                <Link key={item.prod.id} to={`/products/${item.prod.id}`}>
                  <img src={item.prod.imageUrl} alt={item.prod.name} />
                </Link>
              ))}
            </div>
            <div className={classes.footer}>
              <div>
                <Link to={`/track/${order.id}`}>Show Order</Link>
              </div>
              <div>
                <span className={classes.price}>
                  <Price price={order.totalPrice} />
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
