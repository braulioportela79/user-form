import styled, { css } from "styled-components";
import { BaseTitle } from "styles/components/base-title";

export const StyledTitle = styled(BaseTitle)`
  font-weight: ${({ fontWeight }) => fontWeight};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 2.25rem;
        `;
      case "md":
        return css`
          font-size: 1.25rem;
        `;
      case "sm":
        return css`
          font-size: 1rem;
        `;
    }
  }}
`;

interface iStyledParagraph {
  fontSize: "lg" | "md" | "sm";
}

export const StyledParagraph = styled.p<iStyledParagraph>`
  font-weight: 400;

  strong,
  b {
    font-weight: 500;
  }

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 1.25rem;
        `;
      case "md":
        return css`
          font-size: 1rem;
        `;
      case "sm":
        return css`
          font-size: 0.75rem;
        `;
    }
  }}
`;
