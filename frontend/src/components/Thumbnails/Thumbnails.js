import { Link } from "react-router-dom";
import classes from "./thumbnails.module.css";
import Price from "../Price/Price";

export default function Thumbnails({ foods }) {
  return (
    <ul className={classes.list}>
      {foods.map((food) => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img
              src={`${food.imageUrl}`}
              alt={food.name}
              className={classes.image}
            />

            <div className={classes.content}>
              <div className={classes.name}>{food.name}</div>
              <div className={classes.product_item_footer}>
                <div className={classes.origins}>
                  {food.origins.map((origin) => (
                    <span key={origin}>{origin}</span>
                  ))}
                </div>
                <div className={classes.cook_time}>{food.cookTime}min.</div>
              </div>
              <div className={classes.price}>
                <Price price={food.price} />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
