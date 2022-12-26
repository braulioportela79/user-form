import { KeyboardEvent } from "react";

export const zipCode = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  e.currentTarget.value = value;
  return e;
};

export const isNumberKey = (e: KeyboardEvent<HTMLInputElement>) => {
  var keycode = e.code;
  var key = e.key.toUpperCase();
  if (
    keycode === `Key${key}` ||
    key === "*" ||
    key === "/" ||
    key === "[" ||
    key === "]" ||
    key === "{" ||
    key === "}" ||
    key === "+" ||
    key === "-" ||
    key === "," ||
    key === "." ||
    key === "=" ||
    key === "_" ||
    key === ")" ||
    key === "(" ||
    key === "#" ||
    key === "@" ||
    key === "!" ||
    key === '"' ||
    key === "'" ||
    key === "$" ||
    key === "%" ||
    key === "¨" ||
    key === "&" ||
    key === ">" ||
    key === "<" ||
    key === ":" ||
    key === "?" ||
    key === "^" ||
    key === "~" ||
    key === ";"
  ) {
    e.preventDefault();
  }
};
