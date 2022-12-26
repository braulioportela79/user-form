import { ReactNode } from "react";
import * as S from "./styles";
import { Header } from "components/Header";
import { StepItem } from "components/StepItem";

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <Header />
        <S.Steps>
          <StepItem
            description="Identificação do usuário"
            icon="info"
            step={1}
          />
          <StepItem description="Endereço do usuário" icon="address" step={2} />
          <StepItem description="Sobre você" icon="about" step={3} />
        </S.Steps>
        <S.Page>{children}</S.Page>
      </S.Wrapper>
    </S.Container>
  );
};
