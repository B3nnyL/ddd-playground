import { Controller, Post, Body, Get, Param, Delete, Put } from "@nestjs/common"
import { CommandBus, QueryBus } from "@nestjs/cqrs"
import { AddReviewCommand } from "src/domain/review/command/impl/add-review.command"
import { GetReviewsQuery } from "src/domain/review/query/impl/get-reviews.query"
import { GetSingleReviewQuery } from "src/domain/review/query/impl/get-singlereview.query"
import { DeleteReviewCommand } from "src/domain/review/command/impl/delete-review.command"
import { UpdateReviewCommand } from "src/domain/review/command/impl/update-review.command"
import { IReviewDto } from "src/domain/review/dto/review.dto.interface"

@Controller("products")
export class ReviewController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ){}

    @Post("/:id/review")
    async addNewReview(@Param("id") productId: any, @Body() IReviewDto: any){
        return this.commandBus.execute(new AddReviewCommand(IReviewDto, productId))
    }

    @Get("/:id/review")
    async getAllReviews(@Param("id") productId): Promise<any>{
        return this.queryBus.execute(new GetReviewsQuery(productId))
    }

    @Delete("/:id/review/:rid")
    async deleteReviewById(@Param("rid") reviewId ): Promise<any> {
        return this.commandBus.execute(new DeleteReviewCommand(reviewId))
    }

    @Put("/:id/review/:rid")
    async updateReviewById(@Param("rid") reviewId, @Body() reviewDto: IReviewDto): Promise<any> {
        return this.commandBus.execute(new UpdateReviewCommand(reviewId, reviewDto))
    }

    @Get("/:id/review/:rid")
    async getReviewById(@Param("rid") reviewId): Promise<any>{
        return this.queryBus.execute(new GetSingleReviewQuery(reviewId))

    } 
}