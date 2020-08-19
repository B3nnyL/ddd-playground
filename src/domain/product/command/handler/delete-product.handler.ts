import { ICommandHandler, CommandHandler } from "@nestjs/cqrs";
import { DeleteProductCommand } from "../impl/delete-product.command";
import { Repository } from "typeorm";
import { Product } from "../../../../persistence/product/product.entity";
import { Inject } from "@nestjs/common";
import { PRODUCT_REPOSITORY } from "../../../../util/constants";

@CommandHandler(DeleteProductCommand)
export class DeleteProductHandler implements ICommandHandler<DeleteProductCommand> {
    constructor(
        @Inject(PRODUCT_REPOSITORY)
        private readonly repository: Repository<Product>
    ){}

    execute(command: DeleteProductCommand) {
        console.log(command)
        //TODO: update return message
        return this.repository.delete(command.id)
    }
}