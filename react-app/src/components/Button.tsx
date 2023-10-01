import { ReactNode } from "react";

interface buttonProps {
  children: ReactNode;
  onClick: () => void;
  color?: "primary" | "secondary";
}

const Button = ({ children, onClick, color }: buttonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
