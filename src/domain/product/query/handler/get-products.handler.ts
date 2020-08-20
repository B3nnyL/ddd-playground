import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Repository } from "typeorm"
import { GetProductsQuery } from "../impl/get-products.query";
import { Product } from "../../../../persistence/product/product.entity"
import { Inject } from "@nestjs/common";
import { DatabaseNotFoundException } from "../../../../util/exception";
import { PRODUCT_REPOSITORY } from "../../../../util/constants";

@QueryHandler(GetProductsQuery)
export class getProductsHandler implements IQueryHandler<GetProductsQuery>{
    constructor(
        @Inject(PRODUCT_REPOSITORY)
        private readonly repository: Repository<Product>
    ){}

    async execute(query: GetProductsQuery){
        try {
            const response = await this.repository.find()
            return { items : response}
        } catch(err) {
            throw new DatabaseNotFoundException("GET products", "No data found")
        }
    }
}