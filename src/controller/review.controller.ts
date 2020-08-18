import { Controller, Post, Body, Get, Param, Delete, Put } from "@nestjs/common"
import { CommandBus, QueryBus } from "@nestjs/cqrs"

@Controller("products")
export class ReviewController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ){}

    @Post("/:id/review")
    async addNewReview(@Body() reviewDto: any){
    }

    @Get("/:id/review")
    async getAllReviews(): Promise<any>{
    }

    @Delete("/:id/review/:oid")
    async deleteReviewById(@Param("id") id, ): Promise<any> {
    }

    @Put("/:id/review/:oid")
    async updateReviewById(@Param() id, @Body() productDto: any): Promise<any> {
    }

    @Get("/:id/review/:oid")
    async getReviewById(@Param() id): Promise<any>{
    } 
}