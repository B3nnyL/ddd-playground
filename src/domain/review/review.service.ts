import { IReviewDto } from "./dto/review.dto.interface";
import { AddReviewCommand } from "./command/impl/add-review.command";
import { GetReviewsQuery } from "./query/impl/get-reviews.query";
import { GetSingleReviewQuery } from "./query/impl/get-singlereview.query";
import { DeleteReviewCommand } from "./command/impl/delete-review.command";
import { UpdateReviewCommand } from "./command/impl/update-review.command";

export class ReviewService {

    addReview(pid: string, reviewDto: IReviewDto){
        return new AddReviewCommand(reviewDto, pid)
    }

    getReviews(pid: string) {
        return new GetReviewsQuery(pid)
    }

    getReview(rid: string) {
        return new GetSingleReviewQuery(rid)
    }

    deleteReview(rid: string) {
        return new DeleteReviewCommand(rid)
    }

    updateReview(rid: string, reviewDto: IReviewDto) {
        return new UpdateReviewCommand(rid, reviewDto)
    }
}