import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddReviewCommand } from "../impl/add-review.command";
import { Repository } from "typeorm";
import { Review } from "../../../../persistence/review/review.entity";
import { Inject } from "@nestjs/common";
import { REVIEW_REPOSITORY } from "../../../../util/constants";

@CommandHandler(AddReviewCommand)
export class AddReviewHandler implements ICommandHandler<AddReviewCommand> {
    constructor(
        @Inject(REVIEW_REPOSITORY)
        private readonly repository: Repository<Review>
    ){}
    async execute(command: AddReviewCommand){
        console.log("handled add review")
        const productId = command.productId
        console.log(productId)
        try{
            return this.repository.insert({product_id: productId, ...command.props})
        } catch(e){
            console.error(e)
        }
    }
}