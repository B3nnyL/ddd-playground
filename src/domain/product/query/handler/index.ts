import { GetProductsQuery } from "../impl/get-products.query";
import { getProductsHandler } from "./get-products.handler";
import { getProductHandler } from "./get-product.handler";

export const QueryHandlers = [getProductsHandler, getProductHandler]