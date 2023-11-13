import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";

export default function NotFound({ message, linkRout, linkText }) {
  return (
    <div className={classes.container}>
      {message}
      <Link to={linkRout}>{linkText}</Link>
    </div>
  );
}

NotFound.defaultProps = {
  message: "Nothing Found!",
  linkRout: "/",
  linkText: "Go To Home Page",
};
