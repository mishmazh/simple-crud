import { FC } from "react";

interface BackdropProps {
  onClick?: () => void;
}

const Backdrop: FC<BackdropProps> = ({ ...props }) => {
  return <div className="backdrop"  {...props}/>;
};

export default Backdrop;
