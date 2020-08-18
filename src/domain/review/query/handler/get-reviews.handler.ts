import { IQueryHandler } from "@nestjs/cqrs";
import { GetReviewsQuery } from "../impl/get-reviews.query";
import { Repository } from "typeorm";
import { Review } from "src/persistence/review/review.entity";
import { Inject } from "@nestjs/common";
import { REVIEW_REPOSITORY } from "src/util/constants";

export class getReviewsHandler implements IQueryHandler<GetReviewsQuery>{
    constructor(
        @Inject(REVIEW_REPOSITORY)
        private readonly repository: Repository<Review>
    ) {}

    async execute(query: GetReviewsQuery){
        this.repository.find({product_id: query.id})
    }
}
