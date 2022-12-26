import { ReactNode } from "react";
import { StyledTitle } from "styles/typograghy";

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props) => {
  return (
    <StyledTitle fontSize="lg" fontWeight={500} tag="h1">
      {children}
    </StyledTitle>
  );
};
