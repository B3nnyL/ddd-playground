import { ICommandHandler, CommandHandler } from "@nestjs/cqrs";
import { UpdateProductCommand } from "../impl/update-product.command";
import { Repository } from "typeorm";
import { Product } from "../../../../persistence/product/product.entity";
import { Inject } from "@nestjs/common";
import { PRODUCT_REPOSITORY } from "../../../../util/constants";
import CustomiseReponse from "../../../../util/reponse";
import { DatabaseException } from "../../../../util/exception";
@CommandHandler(UpdateProductCommand)
export class updateProductHandler implements ICommandHandler<UpdateProductCommand>{
    constructor(
        @Inject(PRODUCT_REPOSITORY)
        private readonly repository: Repository<Product>
    ){
    }

    async execute(command: UpdateProductCommand){
        try {
            const {raw, affected} = await this.repository.update(command.id, command.props)
            if(affected && affected !== 0){
                return new CustomiseReponse(`Successfully updated product, id: ${command.id}`, 200)
            }
            throw new Error(`Unable to update product, id: ${command.id}`)
        } catch(err) {
            throw new DatabaseException("UPDATE product", err.message);
            
        }
    }
}