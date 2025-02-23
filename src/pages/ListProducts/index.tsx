import { useEffect, useState } from "react";
import CardComponent from "../../components/Card/index.tsx";
import {
  IProduct,
  ProductService,
} from "../../services/Product/ProductService.ts";
import * as S from "./styles.ts";
import { ApiException } from "../../services/ApiException.ts";

const ListProductsPage = () => {
  const [data, setData] = useState<IProduct[]>();

  useEffect(() => {
    ProductService.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setData(result);
      }
    });
  }, []);

  return (
    <S.Wrapper>
      {data?.map((product, index) => (
        <CardComponent key={index} data={product} />
      ))}
    </S.Wrapper>
  );
};

export default ListProductsPage;
