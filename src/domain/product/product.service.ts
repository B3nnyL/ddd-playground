import { IProductDto } from "./dto/product.dto.interface";
import { AddProductCommand } from "./command/impl/add-product.command";
import { GetProductsQuery } from "./query/impl/get-products.query";
import { DeleteProductCommand } from "./command/impl/delete-product.command";
import { UpdateProductCommand } from "./command/impl/update-product.command";
import { GetProductQuery } from "./query/impl/get-product.query";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

export class ProductService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ){}

    addProduct(productDto: IProductDto) {
        return this.commandBus.execute(new AddProductCommand(productDto))
    }

    getAllProducts() {
        return this.queryBus.execute(new GetProductsQuery())
    }

    deleteProduct(id: string) {
        return this.commandBus.execute(new DeleteProductCommand(id))
    }

    updateProduct(id: string, productDto: IProductDto) {
        return this.commandBus.execute(new UpdateProductCommand(id, productDto))
    }

    getProduct(id: string) {
        return this.queryBus.execute(new GetProductQuery(id))
    }

}