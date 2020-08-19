import { ICommandHandler, CommandHandler } from "@nestjs/cqrs";
import { UpdateReviewCommand } from "../impl/update-review.command";
import { Inject } from "@nestjs/common";
import { REVIEW_REPOSITORY } from "../../../../util/constants";
import { Repository } from "typeorm";
import { Review } from "../../../../persistence/review/review.entity";

@CommandHandler(UpdateReviewCommand)
export class UpdateReviewHandler implements ICommandHandler<UpdateReviewCommand>{
    constructor(
        @Inject(REVIEW_REPOSITORY)
        private readonly repository: Repository<Review>
    ){}

    async execute(command: UpdateReviewCommand) {
        return this.repository.update({id: command.reviewId},command.props)
    }
}