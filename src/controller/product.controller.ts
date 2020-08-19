import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { Post, Controller, Body, Get, Delete, Param, Put } from "@nestjs/common";
import {IProductDto} from '../domain/product/dto/product.dto.interface'
import { AddProductCommand } from "../domain/product/command/impl/add-product.command";
import { Product } from "../persistence/product/product.entity";
import { GetProductsQuery } from "../domain/product/query/impl/get-products.query";
import { GetProductQuery } from "../domain/product/query/impl/get-product.query"
import { DeleteProductCommand } from "../domain/product/command/impl/delete-product.command";
import { UpdateProductCommand } from "../domain/product/command/impl/update-product.command";

@Controller("products")
export class ProductController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ){}

    @Post()
    async addNewProduct(@Body() productDto: IProductDto){
        return this.commandBus.execute(new AddProductCommand(productDto))
    }

    @Get()
    async getAllProducts(): Promise<Product[]>{
        return this.queryBus.execute(new GetProductsQuery())
    }

    @Delete("/:id")
    async deleteProductById(@Param() id): Promise<any> {
        return this.commandBus.execute(new DeleteProductCommand(id))
    }

    @Put("/:id")
    async updateProductById(@Param() id, @Body() productDto: IProductDto): Promise<any> {
        return this.commandBus.execute(new UpdateProductCommand(id, productDto))
    }

    @Get("/:id")
    async getProductById(@Param() id): Promise<Product>{
        return this.queryBus.execute(new GetProductQuery(id))
    } 
}