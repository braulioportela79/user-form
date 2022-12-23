import styled, { css } from "styled-components";

interface iStyledButtonProps {
  buttonSize: "lg" | "md" | "sm";
  buttonColor: "purple" | "grey";
  fontSize: "lg" | "md" | "sm";
}

export const StyledButton = styled.button<iStyledButtonProps>`
  font-weight: 400;

  strong,
  b {
    font-weight: 500;
  }

  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 0.6rem 0;
  transition: all ease-in-out 0.4s;
  :disabled {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "lg":
        return css`
          width: 55%;
        `;
      case "md":
        return css`
          width: 35%;
        `;
      case "sm":
        return css`
          width: 15%;
        `;
    }
  }}

  ${({ buttonColor }) => {
    switch (buttonColor) {
      case "purple":
        return css`
          background: ${({ theme }) => theme.colors.purple};
        `;
      case "grey":
        return css`
          background: ${({ theme }) => theme.colors.darkGrey};
        `;
    }
  }}

	  &:not([disabled]):hover {
    filter: brightness(1.1);
  }

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 1.2rem;
        `;
      case "md":
        return css`
          font-size: 1rem;
        `;
      case "sm":
        return css`
          font-size: 0.8rem;
        `;
    }
  }}
`;
