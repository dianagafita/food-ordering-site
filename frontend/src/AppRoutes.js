import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Food from "./pages/Food/Food";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Checkout from "./pages/Checkout/Checkout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/search/:searchTerm" element={<HomePage />}></Route>
      <Route path="/food/:id" element={<Food />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route
        path="/checkout"
        element={
          <AuthRoute>
            <Checkout />
          </AuthRoute>
        }
      ></Route>
    </Routes>
  );
}
