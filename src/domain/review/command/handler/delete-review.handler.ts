import { ICommandHandler, CommandHandler } from "@nestjs/cqrs";
import { DeleteReviewCommand } from '../impl/delete-review.command'
import { Repository } from "typeorm";
import { Review } from "../../../../persistence/review/review.entity";
import { Inject } from "@nestjs/common";
import { REVIEW_REPOSITORY } from "../../../../util/constants";

@CommandHandler(DeleteReviewCommand)
export class DeleteReviewHandler implements ICommandHandler<DeleteReviewCommand>{
    constructor(
        @Inject(REVIEW_REPOSITORY)
        private readonly repository: Repository<Review>
    ){}
    async execute(command: DeleteReviewCommand){
        return this.repository.delete({id: command.reviewId})
    }
}
