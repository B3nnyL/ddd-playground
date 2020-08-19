import { Connection } from 'typeorm'
import { Review } from './review.entity'
import { REVIEW_REPOSITORY } from 'src/util/constants'

export const reviewProviders = [
    {
        provide:  REVIEW_REPOSITORY,
        useFactory: (connection: Connection) => connection.getRepository(Review),
        inject: ['DATABASE_CONNECTION']
    }
]