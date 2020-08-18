import {createConnection} from 'typeorm'
import { Product } from '../../persistence/product/product.entity'
import { Review } from 'src/persistence/review/review.entity'

export const databaseProviders= [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'test',
            entities: [
                Product, Review
            ],
            synchronize: true
        })
    }
]