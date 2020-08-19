import { IReviewDto } from "../../dto/review.dto.interface";

export class AddReviewCommand {
    constructor(
        public readonly props: IReviewDto, 
        public readonly productId: string
        ){}
}