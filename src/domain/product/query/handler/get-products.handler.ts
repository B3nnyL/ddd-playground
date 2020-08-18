import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Repository } from "typeorm"
import { GetProductsQuery } from "../impl/get-products.query";
import { Product } from "src/persistence/product/product.entity"
import { Inject } from "@nestjs/common";

@QueryHandler(GetProductsQuery)
export class getProductsHandler implements IQueryHandler<GetProductsQuery>{
    constructor(
        @Inject("PRODUCT_REPOSITORY")
        private readonly repository: Repository<Product>
    ){}

    async execute(query: GetProductsQuery){
        return this.repository.find()
    }
}