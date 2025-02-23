import * as S from "./styles.ts";
import ArrowRightIcon from "../../assets/arrow-right-icon.svg";

const BreadcrumbComponent = () => {
  return (
    <S.Wrapper>
      Home
      <S.IconArrow src={ArrowRightIcon} width={5} /> Óleos e Lubrificantes
      <S.IconArrow src={ArrowRightIcon} width={5} />
      <S.TabSelect>Óleos do Motor</S.TabSelect>
    </S.Wrapper>
  );
};

export default BreadcrumbComponent;
