import React from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  children: string;
  onClick?: () => void;
}

export const Button = ({
  size = "medium",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
