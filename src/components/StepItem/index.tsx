import { StyledParagraph } from "styles/typograghy";
import * as S from "./styles";
import { ReactComponent as InfoIcon } from "assets/images/info.svg";
import { ReactComponent as AddressIcon } from "assets/images/address.svg";
import { ReactComponent as AboutIcon } from "assets/images/about.svg";
import { useForm } from "hooks/useForm";
import { validateInfo } from "utils/validateInfo";

type Props = {
  description: string;
  icon: string;
  step: number;
};

export const StepItem = ({ description, icon, step }: Props) => {
  const { state } = useForm(validateInfo);
  step = state.currentStep;

  return (
    <S.Container>
      <S.IconArea step={step}>
        {icon === "info" && <InfoIcon id="info" />}
        {icon === "address" && <AddressIcon id="address" />}
        {icon === "about" && <AboutIcon id="about" />}
      </S.IconArea>
      <StyledParagraph fontSize="md">
        <b>{description}</b>
      </StyledParagraph>
    </S.Container>
  );
};
