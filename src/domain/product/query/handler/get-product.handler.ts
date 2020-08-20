import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Repository } from "typeorm"
import { GetProductQuery } from "../impl/get-product.query";
import { Product } from "../../../../persistence/product/product.entity"
import { Inject } from "@nestjs/common";
import { DatabaseNotFoundException } from "../../../../util/exception";
import { PRODUCT_REPOSITORY } from "../../../../util/constants";

@QueryHandler(GetProductQuery)
export class getProductHandler implements IQueryHandler<GetProductQuery>{
    constructor(
        @Inject(PRODUCT_REPOSITORY)
        private readonly repository: Repository<Product>
    ){}

    async execute(query: GetProductQuery){
        try {
            return await this.repository.findOneOrFail(query.id)
        } catch(err) {
            throw new DatabaseNotFoundException("GET products", `Product is not found, id: ${query.id} `)
        }
    }
}