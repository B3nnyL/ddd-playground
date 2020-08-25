import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { Post, Controller, Body, Get, Delete, Param, Put } from "@nestjs/common";
import {IProductDto} from '../domain/product/dto/product.dto.interface'
import { Product } from "../persistence/product/product.entity";
import { ProductService } from "../domain/product/product.service";

@Controller("products")
export class ProductController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
        private readonly productService: ProductService
    ){}

    @Post()
    async addNewProduct(@Body() productDto: IProductDto){
        return this.commandBus.execute(this.productService.addProduct(productDto))
    }

    @Get()
    async getAllProducts(): Promise<Product[]>{
        return this.queryBus.execute(this.productService.getAllProducts())
    }

    @Delete("/:id")
    async deleteProductById(@Param("id") id): Promise<any> {
        return await this.commandBus.execute(this.productService.deleteProduct(id))
    }

    @Put("/:id")
    async updateProductById(@Param("id") id, @Body() productDto: IProductDto): Promise<any> {
        return this.commandBus.execute(this.productService.updateProduct(id, productDto))
    }

    @Get("/:id")
    async getProductById(@Param("id") id): Promise<Product>{
        return this.queryBus.execute(this.productService.getProduct(id))
    } 
}