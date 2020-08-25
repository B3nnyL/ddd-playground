import { IReviewDto } from "./dto/review.dto.interface";
import { AddReviewCommand } from "./command/impl/add-review.command";
import { GetReviewsQuery } from "./query/impl/get-reviews.query";
import { GetSingleReviewQuery } from "./query/impl/get-singlereview.query";
import { DeleteReviewCommand } from "./command/impl/delete-review.command";
import { UpdateReviewCommand } from "./command/impl/update-review.command";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

export class ReviewService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ){}

    addReview(pid: string, reviewDto: IReviewDto){
        return this.commandBus.execute(new AddReviewCommand(reviewDto, pid))
    }

    getReviews(pid: string) {
        return this.queryBus.execute(new GetReviewsQuery(pid))
    }

    getReview(rid: string) {
        return this.queryBus.execute(new GetSingleReviewQuery(rid))
    }

    deleteReview(rid: string) {
        return this.commandBus.execute(new DeleteReviewCommand(rid))
    }

    updateReview(rid: string, reviewDto: IReviewDto) {
        return this.commandBus.execute(new UpdateReviewCommand(rid, reviewDto))
    }
}