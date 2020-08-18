import { ICommandHandler, CommandHandler } from "@nestjs/cqrs";
import { UpdateProductCommand } from "../impl/update-product.command";
import { Repository } from "typeorm";
import { Product } from "src/persistence/product/product.entity";
import { Inject } from "@nestjs/common";
import { PRODUCT_REPOSITORY } from "src/util/constants";
@CommandHandler(UpdateProductCommand)
export class updateProductHandler implements ICommandHandler<UpdateProductCommand>{
    constructor(
        @Inject(PRODUCT_REPOSITORY)
        private readonly repository: Repository<Product>
    ){
    }

    async execute(command: UpdateProductCommand){
        return this.repository.update(command.id, command.props)
    }
}