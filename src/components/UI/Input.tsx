import {ChangeEvent, FC} from "react";

interface InputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: FC<InputProps> = ({ className, type = "text", ...props }) => {
  const cls = ["main-input", className];

  return <input className={cls.join(" ")} type={type} {...props} />;
};

export default Input;
