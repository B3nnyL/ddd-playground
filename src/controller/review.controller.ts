import { Controller, Post, Body, Get, Param, Delete, Put } from "@nestjs/common"
import { CommandBus, QueryBus } from "@nestjs/cqrs"
import { AddReviewCommand } from "../domain/review/command/impl/add-review.command"
import { GetReviewsQuery } from "../domain/review/query/impl/get-reviews.query"
import { GetSingleReviewQuery } from "../domain/review/query/impl/get-singlereview.query"
import { DeleteReviewCommand } from "../domain/review/command/impl/delete-review.command"
import { UpdateReviewCommand } from "../domain/review/command/impl/update-review.command"
import { IReviewDto } from "../domain/review/dto/review.dto.interface"
import { ReviewService } from "../domain/review/review.service"

@Controller("products")
export class ReviewController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
        private readonly reviewService: ReviewService
    ){}

    @Post("/:id/review")
    async addNewReview(@Param("id") productId: any, @Body() reviewDto: any){
        return this.commandBus.execute(this.reviewService.addReview(productId, reviewDto))
    }

    @Get("/:id/review")
    async getAllReviews(@Param("id") productId): Promise<any>{
        return this.queryBus.execute(this.reviewService.getReviews(productId))
    }

    @Delete("/:id/review/:rid")
    async deleteReviewById(@Param("rid") reviewId ): Promise<any> {
        return this.commandBus.execute(this.reviewService.deleteReview(reviewId))
    }

    @Put("/:id/review/:rid")
    async updateReviewById(@Param("rid") reviewId, @Body() reviewDto: IReviewDto): Promise<any> {
        return this.commandBus.execute(this.reviewService.updateReview(reviewId, reviewDto))
    }

    @Get("/:id/review/:rid")
    async getReviewById(@Param("rid") reviewId): Promise<any>{
        return this.queryBus.execute(this.reviewService.getReview(reviewId))

    } 
}