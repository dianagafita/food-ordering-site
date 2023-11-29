// import { Link } from "react-router-dom";
// import Price from "../Price/Price";
// import classes from "./OrderItemsList.module.css";

// export default function OrderItemsList({ order }) {
//   return (
//     <table className={classes.table}>
//       <tbody>
//         <tr>
//           <td colSpan="5">
//             <h3>Order Items:</h3>
//           </td>
//         </tr>
//         {order.items.map((item) => (
//           <tr key={item.food.id}>
//             <td>
//               <Link to={`/food${item.food.id}`}>
//                 <img src={item.food.imageUrl} />
//               </Link>
//             </td>
//             <td>{item.food.name}</td>
//             <td>
//               <Price price={item.food.price} />
//             </td>
//             <td>{item.food.quantity}</td>
//             <td>
//               <Price price={item.price} />
//             </td>
//           </tr>
//         ))}

//         <tr>
//           <td colSpan={3}></td>
//           <td>
//             <strong>Total :</strong>
//           </td>
//           <td>
//             <Price price={order.totalPrice} />
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }
import { Link } from "react-router-dom";
import Price from "../Price/Price";
import classes from "./OrderItemsList.module.css";

export default function OrderItemsList({ order }) {
  return (
    <table className={classes.table}>
      <tbody>
        <tr>
          <td colSpan="5">
            <h3>Order Items:</h3>
          </td>
        </tr>
        {order.items.map((item) => (
          <tr key={item.prod.id}>
            <td>
              <Link to={`/products/${item.prod.id}`}>
                <img src={item.prod.img} />
              </Link>
            </td>
            <td>{item.prod.name}</td>
            <td>
              <Price price={item.prod.price} />
            </td>
            <td>{item.prod.quantity}</td>
            <td>
              <Price price={item.price} />
            </td>
          </tr>
        ))}

        <tr>
          <td colSpan={3}></td>
          <td>
            <strong>Total :</strong>
          </td>
          <td>
            <Price price={order.totalPrice} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
