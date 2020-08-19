import { ICommandHandler, CommandHandler } from "@nestjs/cqrs";
import { DeleteProductCommand } from "../impl/delete-product.command";
import { Repository } from "typeorm";
import { Product } from "../../../../persistence/product/product.entity";
import { Inject } from "@nestjs/common";
import { PRODUCT_REPOSITORY } from "../../../../util/constants";
import CustomiseReponse from "../../../../util/reponse";
import { DatabaseException } from '../../../../util/exception'

@CommandHandler(DeleteProductCommand)
export class DeleteProductHandler implements ICommandHandler<DeleteProductCommand> {
    constructor(
        @Inject(PRODUCT_REPOSITORY)
        private readonly repository: Repository<Product>
    ){}

    async execute(command: DeleteProductCommand) {
        try {
            const response = await this.repository.delete(command.id)
            console.log(command.id)
            const {affected, raw} =  response
            if(affected && affected !== 0){
                return new CustomiseReponse(`Successfully removed ${command.id}`, 200)
            }
            throw new Error(`Failed at deleting product, id: ${command.id}`)
            
        } catch(err){
            throw new DatabaseException("DELETE product", err.message)
            
        }
    }
}