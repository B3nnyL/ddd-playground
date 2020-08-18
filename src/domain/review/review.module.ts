import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { reviewProviders } from '../../persistence/review/review.provider'
import { ReviewController } from "../../controller/review.controller";
import { QueryHandlers } from './query/handler/index'
import { DatabaseModule } from "src/configuration/database/database.module";

@Module({
    imports: [CqrsModule, DatabaseModule],
    controllers: [ReviewController],
    providers: [
        ...reviewProviders,
        ...QueryHandlers
    ]
})

export class ReviewModule {}