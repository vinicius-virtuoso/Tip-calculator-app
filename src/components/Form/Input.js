import React from "react";
import Error from "../Error/Error";
import styles from "./Input.module.css";

const Input = ({ id, label, onChange, onBlur, value, error, ...props }) => {
  return (
    <>
      <label className={styles.Label} htmlFor={id}>
        <div>
          {label} <div>{error && <Error />}</div>
        </div>
        <input
          className={error ? `${styles.InputError}`:`${styles.Input}`}
          id={id}
          type="number"
          label={label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />
      </label>
    </>
  );
};

export default Input;
