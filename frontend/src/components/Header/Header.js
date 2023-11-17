import { Link } from "react-router-dom";
import classes from "./header.module.css";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { BsCart3 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
// import { FaRegUser } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
export default function Header() {
  const { user, logout } = useAuth();

  const { cart } = useCart();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          Home
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_cont}>
                <Link to="/profile">
                  <FaRegUser
                    style={{
                      fontSize: "0.45cm",
                      marginRight: "10px",
                    }}
                  />
                  {user.name}
                </Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to="/login">Login</Link>
            )}

            <Link to="/cart">
              <BsCart3 />
              {cart.totalCount > 0 && (
                <span className={classes.cart_count}>{cart.totalCount}</span>
              )}
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
