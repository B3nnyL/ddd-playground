import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddProductCommand } from "../impl/add-product.command";
import { Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Product } from "../../../../persistence/product/product.entity";
import { PRODUCT_REPOSITORY } from "../../../../util/constants";
import CustomiseReponse from "../../../../util/reponse";
import { DatabaseException } from "../../../../util/exception"

@CommandHandler(AddProductCommand)
export class AddProductHandler implements ICommandHandler<AddProductCommand>{
    constructor(
        @Inject(PRODUCT_REPOSITORY)
        private readonly repository: Repository<Product>
    ){}

    async execute(command: AddProductCommand) {
        try {
            await this.repository.insert(
            command.props
            )
            return new CustomiseReponse("A new Product is added")
        } catch(err) {
            throw new DatabaseException("Insert Product", err)
        }
    }
}