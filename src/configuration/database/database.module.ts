import { Module } from '@nestjs/common'
import { databaseProviders } from './databasse.provider'

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})

export class DatabaseModule {}