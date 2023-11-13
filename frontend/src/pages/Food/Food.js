import React, { useEffect, useState } from "react";
import classes from "./Food.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { getById } from "../../Services/foodService";
import Price from "../../components/Price/Price";
import { useCart } from "../../hooks/useCart";
import NotFound from "../../components/Notfound/NotFound";

export default function Food() {
  const [food, setFood] = useState("");
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddTooCart = () => {
    addToCart(food);
    navigate("/cart");
  };

  useEffect(() => {
    getById(id).then(setFood);
  }, [id]);

  return (
    <>
      {!food ? (
        <NotFound message="Food NotFound" linkText="Back To Home Page" />
      ) : (
        <div className={classes.container}>
          <img
            className={classes.image}
            src={`${food.imageUrl}`}
            alt={food.name}
          />
          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}>{food.name}</span>
            </div>
            <div className={classes.origins}>
              {food.origins?.map((origin) => (
                <span key={origin}>{origin}</span>
              ))}
            </div>
            <div className={classes.cook_time}>
              <span>
                Time to cook about <strong>{food.cookTime}</strong> minutes!
              </span>
            </div>
            <div className={classes.price}>
              <Price price={food.price} />
            </div>
            <button className={classes.button} onClick={handleAddTooCart}>
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
