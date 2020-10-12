import { FC, ReactNode } from "react";

import styles from "@Styles/components/Button.module.scss";

type ButtonProps = {
  color: "primary" | "secondary";
  children: string | ReactNode;
  className?: string;
  onClick?: any;
};

const Button: FC<ButtonProps> = ({ children, color, className, onClick }) => {
  return (
    <button
      type="submit"
      color={color}
      onClick={onClick}
      className={`${className} ${styles.button} ${
        color === "primary" ? styles.primary : styles.secondary
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
