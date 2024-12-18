import { FunctionComponent, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = ({ ...rest }) => {
  return <button {...rest} />;
};

export default Button;
