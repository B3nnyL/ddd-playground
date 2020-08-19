import { HttpException, HttpStatus } from "@nestjs/common"

export class DatabaseException extends HttpException {
    constructor(
        public readonly operation: string,
        public readonly message: string
        ){
            super(message, HttpStatus.SERVICE_UNAVAILABLE)
        }
}

export class DatabaseNotFoundException extends HttpException {
    constructor(
        public readonly operation: string,
        public readonly message: string
    ){
        super(message, HttpStatus.NOT_FOUND)
    }
}

