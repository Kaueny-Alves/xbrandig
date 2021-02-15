import React from "react";
import styles from "./Button.module.css";

const Button = ({children, ...props}) => {
  return (
    <div>
      <button className={styles.button} {...props} >
        {children}
      </button>
    </div>
  );
};

export default Button;
