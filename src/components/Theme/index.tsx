import { ReactNode } from "react";
import * as S from "./styles";
import {Header} from "components/Header";

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  return (
    <S.Container>
      <S.Area>
        <Header />
        <S.Wrapper>
          <S.Steps>STEPS</S.Steps>
          <S.Page>{children}</S.Page>
        </S.Wrapper>
      </S.Area>
    </S.Container>
  );
};
