import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { AddProductCommand } from "../impl/add-product.command";
import { Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Product } from "src/persistence/product/product.entity";
import { PRODUCT_REPOSITORY } from "src/util/constants";

@CommandHandler(AddProductCommand)
export class AddProductHandler implements ICommandHandler<AddProductCommand>{
    constructor(
        @Inject(PRODUCT_REPOSITORY)
        private readonly repository: Repository<Product>
    ){}

    async execute(command: AddProductCommand) {
        const result = await this.repository.insert(
           command.props
        )
        console.log("insert new item")
    }
}