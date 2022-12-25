import React, { InputHTMLAttributes, useCallback } from "react";
import { zipCode } from "utils/masks";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "zipCode";
}

export const Input: React.FC<InputProps> = ({ mask, ...props }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "zipCode") {
        zipCode(e);
      }
    },
    [mask]
  );

  return <input {...props} onKeyUp={handleKeyUp} />;
};
