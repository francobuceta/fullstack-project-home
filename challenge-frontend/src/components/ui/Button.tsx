import { FC } from "react";

interface ButtonProps {
  content: string;
  action?: VoidFunction;
}

const Button: FC<ButtonProps> = ({ content, action }) => {
  return (
    <button
      className="rounded-full bg-primary text-white px-3 py-2 cursor-pointer hover:opacity-[0.8] transition-opacity"
      onClick={action}
    >
      {content}
    </button>
  );
};

export default Button;
