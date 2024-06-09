import { FC, HTMLAttributes } from "react";

const Container: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;