import classes from "./Input.module.css";
import React from "react";
import InpContainer from "../InputContainer/InpContainer";

function Input(
  { label, type, defaultValue, onChange, onBlur, name, error },
  ref
) {
  const getErrorMessage = () => {
    if (!error) return;

    if (error.message) return error.message;

    switch (error.type) {
      case "required":
        return "This field is required";
      case "minLength":
        return "Field is too short";
      default:
        return "*";
    }
  };

  return (
    <InpContainer label={label}>
      <input
        defaultValue={defaultValue}
        className={classes.input}
        type={type}
        placeholder={`Please enter ${label.toLowerCase()}`}
        ref={ref}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className={classes.error}>{getErrorMessage()}</div>}
    </InpContainer>
  );
}

export default React.forwardRef(Input);
