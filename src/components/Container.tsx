import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

const Container: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => (
  <div className={clsx("container", className || "")}>
    {children}
  </div>
);

export default Container;