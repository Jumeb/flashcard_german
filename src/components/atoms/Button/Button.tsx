import React from "react";

interface ButtonProps {
  text?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  borderRadius?: boolean;
  hasBorder?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
}

const ButtonAtom: React.FC<ButtonProps> = ({
  text,
  leftIcon,
  rightIcon,
  className = "",
  borderRadius = true,
  hasBorder = false,
  variant = "primary",
  onClick,
}) => {
  const baseStyles =
    "flex items-center text-center justify-center min-w-30 cursor-pointer text-sm font-medium gap-2 px-2 py-2 min-h-[40px] transition-all duration-500 " +
    (borderRadius ? "rounded-md" : "rounded-none") +
    (hasBorder ? " border border-border-radius" : " border-none");

  const primaryStyles =
    "text-white bg-gray-800 hover:bg-gray-800/90 hover:border-transparent";
  const secondaryStyles = "bg-wh-text text-bk-text hover:bg-[#ded7d7] ";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${
        variant === "primary" ? primaryStyles : secondaryStyles
      } ${className}`}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {text && <span className="flex items-center">{text}</span>}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
};

export default ButtonAtom;
