import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import { useCart } from "../../hooks/useCart";
import classes from "./Cart.module.css";
import Price from "../../components/Price/Price";
import NotFound from "../../components/Notfound/NotFound";

export default function Cart() {
  const { cart, removeFromCart, changeQuantiy } = useCart();

  return (
    <>
      <Title title="Cart Page" margin="1.5rem 0 0 2.5rem" />
      {cart.items.length === 0 ? (
        <NotFound message="The Cart Is Empty" />
      ) : (
        <div className={classes.container}>
          <ul className={classes.list}>
            {cart.items.map((item) => (
              <li key={item.food.id}>
                <div>
                  <img src={`${item.food.imageUrl}`} alt={item.food.name} />
                </div>
                <div>
                  <Link className={classes.name} to={`/food/${item.food.id}`}>
                    {item.food.name}
                  </Link>
                </div>
                <div>
                  <select
                    value={item.quanity}
                    onChange={(e) =>
                      changeQuantiy(item, Number(e.target.value))
                    }
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>
                <div className={classes.price}>
                  <Price price={item.price} />
                </div>

                <div>
                  <button
                    className={classes.removeBtn}
                    onClick={() => removeFromCart(item.food.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className={classes.checkout}>
            <div>
              <div className={classes.foods_count}>{cart.totalCount}</div>
              <div className={classes.total_price}>
                <Price price={cart.totalPrice} />
              </div>
            </div>
            <Link to="/checkout">Proceed To Checkout</Link>
          </div>
        </div>
      )}
    </>
  );
}
