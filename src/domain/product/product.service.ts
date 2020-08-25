import { IProductDto } from "./dto/product.dto.interface";
import { AddProductCommand } from "./command/impl/add-product.command";
import { GetProductsQuery } from "./query/impl/get-products.query";
import { DeleteProductCommand } from "./command/impl/delete-product.command";
import { UpdateProductCommand } from "./command/impl/update-product.command";
import { GetProductQuery } from "./query/impl/get-product.query";

export class ProductService {
    addProduct(productDto: IProductDto) {
        return new AddProductCommand(productDto)
    }

    getAllProducts() {
        return new GetProductsQuery()
    }

    deleteProduct(id: string) {
        return new DeleteProductCommand(id)
    }

    updateProduct(id: string, productDto: IProductDto) {
        return new UpdateProductCommand(id, productDto)
    }

    getProduct(id: string) {
        return new GetProductQuery(id)
    }

}