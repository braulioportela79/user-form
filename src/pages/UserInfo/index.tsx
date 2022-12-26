import { Header } from "components/Header";
import { StyledButton } from "styles/buttons";
import { StyledParagraph, StyledTitle } from "styles/typograghy";
import * as S from "./styles";
import { useForm } from "hooks/useForm";
import { validateInfo } from "utils/validateInfo";

export const UserInfo = () => {
  const { state } = useForm(validateInfo);

  const handleNewUser = () => {
    window.location.href = '/'
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Header>Usuário criado!</Header>
        <S.InfoContainer>
          <StyledTitle fontSize="sm" tag="h3" fontWeight={500}>
            Nome
          </StyledTitle>
          <StyledParagraph fontSize="lg">{state.user.name}</StyledParagraph>
        </S.InfoContainer>
        <S.InfoContainer>
          <StyledTitle fontSize="sm" tag="h3" fontWeight={500}>
            Email
          </StyledTitle>
          <StyledParagraph fontSize="lg">{state.user.email}</StyledParagraph>
        </S.InfoContainer>
        <hr />
        <S.InfoWrapper>
          <S.InfoContainer>
            <StyledTitle fontSize="sm" tag="h3" fontWeight={500}>
              Rua
            </StyledTitle>
            <StyledParagraph fontSize="lg">
              {state.user.address.street}
            </StyledParagraph>
          </S.InfoContainer>
          <S.InfoContainer>
            <StyledTitle fontSize="sm" tag="h3" fontWeight={500}>
              Número
            </StyledTitle>
            <StyledParagraph fontSize="lg">
              {state.user.address.number}
            </StyledParagraph>
          </S.InfoContainer>
        </S.InfoWrapper>
        <S.InfoContainer>
          <StyledTitle fontSize="sm" tag="h3" fontWeight={500}>
            CEP
          </StyledTitle>
          <StyledParagraph fontSize="lg">
            {state.user.address.zipCode}
          </StyledParagraph>
        </S.InfoContainer>
        <StyledButton
          buttonColor="purple"
          buttonSize="lg"
          fontSize="md"
          onClick={handleNewUser}
        >
          Novo Usuário
        </StyledButton>
      </S.Wrapper>
    </S.Container>
  );
};
