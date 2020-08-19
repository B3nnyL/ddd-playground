import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { productProviders } from '../../persistence/product/product.provider'
import { ProductController } from "../../controller/product.controller";
import { CommandHandler } from "./command/handler/index";
import { QueryHandlers } from './query/handler/index'
import { DatabaseModule } from "../../configuration/database/database.module";

@Module({
    imports: [CqrsModule, DatabaseModule],
    controllers: [ProductController],
    providers: [
        ...productProviders,
        ...CommandHandler,
        ...QueryHandlers
    ]
})

export class ProductModule {}