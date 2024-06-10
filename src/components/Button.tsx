import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "text" | "icon";
type ButtonSize = "md" | "lg";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button: FC<IButton> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <button 
      {...props}
      className={clsx(`btn btn--${variant} btn--${size}`, className)}
    >
      {children}
    </button>
  );
};

export default Button;