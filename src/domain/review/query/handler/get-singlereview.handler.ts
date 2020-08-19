import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { GetSingleReviewQuery } from "../impl/get-singlereview.query";
import { Repository } from "typeorm";
import { Review } from "src/persistence/review/review.entity";
import { Inject } from "@nestjs/common";
import { REVIEW_REPOSITORY } from "src/util/constants";


@QueryHandler(GetSingleReviewQuery)
export class getSingleReviewHandler implements IQueryHandler<GetSingleReviewQuery> {
    constructor(
        @Inject(REVIEW_REPOSITORY)
        private readonly repository: Repository<Review>
    ){}
    async execute(query: GetSingleReviewQuery){
        return this.repository.findOneOrFail(query.reviewId)
    }
}