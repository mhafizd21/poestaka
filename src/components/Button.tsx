import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "text";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: FC<IButton> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  return (
    <button className={clsx(`btn btn--${variant}`, className) }>
      {children}
    </button>
  );
};

export default Button;