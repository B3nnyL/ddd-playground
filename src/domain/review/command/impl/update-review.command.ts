import { IReviewDto } from '../../dto/review.dto.interface'
export class UpdateReviewCommand {
  constructor(
      public readonly reviewId: string,
      public readonly props: IReviewDto
    )  {}
}