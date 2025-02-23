import * as S from "./styles";
import HomeIcon from "../../assets/home-icon.svg";
import ArrowIcon from "../../assets/arrow-down-icon.svg";
import InfoIcon from "../../assets/info-icon.svg";
import MecanizouLogo from "../../assets/mecanizou-logo-header.svg";
import ShopCartIcon from "../../assets/shopping-cart-icon.svg";
import SearchComponent from "../Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.Header>
      <Link to="/">
        <img src={MecanizouLogo} />
      </Link>
      <SearchComponent />
      <S.ButtonShoppingCart>
        <S.IconShopCart src={ShopCartIcon} />0
      </S.ButtonShoppingCart>
      <S.ContentUser>
        <S.IconHome src={HomeIcon} />
        Minha Oficina
        <S.IconArrow src={ArrowIcon} />
      </S.ContentUser>
      <S.ButtonInfo>
        <S.IconInfo src={InfoIcon} />
      </S.ButtonInfo>
    </S.Header>
  );
};

export default Header;
