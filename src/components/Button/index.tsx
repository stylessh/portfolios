import { FC, ReactNode } from "react";

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
      className={`${className} button ${
        color === "primary" ? "primary" : "secondary"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
