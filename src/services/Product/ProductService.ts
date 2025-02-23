import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

interface IPriceInstallment {
  quantity: number;
  value: string;
}

export interface IProduct {
  id: string;
  brand: string;
  name: string;
  price: string;
  previousPrice: string;
  discount: number;
  installments: IPriceInstallment;
  image: string;
}

const getAll = async (): Promise<IProduct[] | ApiException> => {
  try {
    const { data } = await Api().get("/products");
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao procurar produto.");
  }
};

export const ProductService = {
  getAll,
};
