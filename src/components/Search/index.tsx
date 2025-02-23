import * as S from "./styles";
import SearchIcon from "../../assets/search-icon.svg";

const SearchComponent = () => {
  return (
    <S.Content>
      <S.IconSearch src={SearchIcon} />
      <S.InputSearch
        placeholder="Busque por produto, termo ou código"
        type="search"
      />
    </S.Content>
  );
};

export default SearchComponent;
