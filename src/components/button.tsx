import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: (() => Promise<void>) | (() => void);
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
