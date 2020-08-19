import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetReviewsQuery } from "../impl/get-reviews.query";
import { Repository } from "typeorm";
import { Review } from "src/persistence/review/review.entity";
import { Inject } from "@nestjs/common";
import { REVIEW_REPOSITORY } from "src/util/constants";

@QueryHandler(GetReviewsQuery)
export class getReviewsHandler implements IQueryHandler<GetReviewsQuery>{
    constructor(
        @Inject(REVIEW_REPOSITORY)
        private readonly repository: Repository<Review>
    ) {}

    async execute(query: GetReviewsQuery){
        console.log("review query")
        return this.repository.find({product_id: query.productId})
    }
}
