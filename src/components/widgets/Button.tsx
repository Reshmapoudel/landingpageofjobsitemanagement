import { ReactNode, MutableRefObject } from "react";
import classNames from "classnames";

interface ButtonProps {
  className?: string;
  loading?: boolean;
  value: string | ReactNode;
  refButton?: MutableRefObject<HTMLButtonElement | null>;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button({
  className,
  loading,
  value,
  onClick,
  type = "button",
  refButton,
}: ButtonProps) {
  return (
    <button
      ref={refButton}
      contentEditable={false}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      className={classNames(`${className} cursor-pointer`)}
      disabled={loading}
    >
      {value}
      {/* {loading ? 'Loading...' : value} */}
    </button>
  );
}

export default Button;
