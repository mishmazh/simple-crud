import { FC, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  onSubmit?: () => void;
  children: ReactNode;
  width?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  type = "button",
  width,
  ...props
}) => {
  const cls = ["btn", className];

  return (
    <button className={cls.join(" ")} type={type} style={{ width: `${width}` }} {...props}>
      {children}
    </button>
  );
};

export default Button;
