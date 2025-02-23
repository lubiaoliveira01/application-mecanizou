import * as S from "./styles.ts";
import CartAddIcon from "../../assets/cart-add-icon.svg";
import IconExpress from "../../assets/express-icon.svg";
import { IProduct } from "../../services/Product/ProductService.ts";

interface ICardProps {
  data: IProduct;
}

const CardComponent = ({ data }: ICardProps) => {
  return (
    <S.Wrapper>
      <S.ContentImgProduct>
        <S.TagExpress>
          <img src={IconExpress} />
          Express
        </S.TagExpress>
        <img src={data.image} alt="Imagem do Produto" width={192} />
      </S.ContentImgProduct>
      <S.ContentProduct>
        <S.BrandProduct>{data.brand}</S.BrandProduct>
        <S.TitleProduct>{data.name}</S.TitleProduct>
        <S.CodeProduct>{data.id}</S.CodeProduct>
      </S.ContentProduct>
      <S.ContentPricing>
        <div>
          <S.PrevPrice>{data.previousPrice}</S.PrevPrice>
          <S.CurrentPrice>
            {data.price.slice(0, -3)}
            <S.PriceCents>,{data.price.slice(-2)}</S.PriceCents>
          </S.CurrentPrice>
          <S.InstallmentPrice>
            Em até {data.installments.quantity}x de {data.installments.value}
          </S.InstallmentPrice>
        </div>
        <S.TagDiscount>
          <S.TextDiscount>{data.discount}% OFF NO PIX</S.TextDiscount>
        </S.TagDiscount>
      </S.ContentPricing>
      <S.ButtonAddProduct>
        <S.IconCartAdd src={CartAddIcon} />
        Adicionar ao Carrinho
      </S.ButtonAddProduct>
    </S.Wrapper>
  );
};

export default CardComponent;
