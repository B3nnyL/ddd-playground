import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Repository } from "typeorm"
import { GetProductQuery } from "../impl/get-product.query";
import { Product } from "src/persistence/product/product.entity"
import { Inject } from "@nestjs/common";

@QueryHandler(GetProductQuery)
export class getProductHandler implements IQueryHandler<GetProductQuery>{
    constructor(
        @Inject("PRODUCT_REPOSITORY")
        private readonly repository: Repository<Product>
    ){}

    async execute(query: GetProductQuery){
        return this.repository.findOneOrFail(query.id)
    }
}