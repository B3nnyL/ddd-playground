export default class CustomiseReponse {
    constructor(
        public readonly message: string,
        public readonly statusCode: number = 200,
    ){}

}