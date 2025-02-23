import * as S from "./styles";
import ArrowIcon from "../../assets/arrow-down-white-icon.svg";
import BudgetIcon from "../../assets/budget-icon.svg";

const menuData = [
  {
    menuName: "Todas as Categorias",
    link: "/",
  },
  {
    menuName: "Óleos e Lubrificantes",
    link: "/",
  },
  {
    menuName: "Pneu",
    link: "/",
  },
  {
    menuName: "Maquinários",
    link: "/",
  },
  {
    menuName: "Ferramentas",
    link: "/",
  },
];

const MenuComponent = () => {
  return (
    <S.Wrapper>
      <S.ContentMenu>
        {menuData.map((menu, index) => (
          <S.StyledLink to={menu.link} key={index}>
            {menu.menuName}
            <S.IconArrow src={ArrowIcon} />
          </S.StyledLink>
        ))}
      </S.ContentMenu>
      <S.ButtonBudget>
        <S.IconArrow src={BudgetIcon} />
        Orçamento Rápido
      </S.ButtonBudget>
    </S.Wrapper>
  );
};

export default MenuComponent;
