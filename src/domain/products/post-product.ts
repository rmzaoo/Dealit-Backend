import { Product } from "@prisma/client";
import { saveProduct } from "../../infrastructure/products-repository";
import { ProductData } from "../../types";

export default async (data: ProductData): Promise<Product> => {
  return saveProduct(data);
};
