import { AddProductHandler } from "./add-product.handler";
import { DeleteProductHandler } from "./delete-product.handler";
import { updateProductHandler } from "./update-product.handler";

export const CommandHandler = [AddProductHandler, DeleteProductHandler, updateProductHandler]