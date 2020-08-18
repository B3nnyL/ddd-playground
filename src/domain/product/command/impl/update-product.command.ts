import { IProductDto } from "../../dto/product.dto.interface";

export class UpdateProductCommand {
    constructor(
        public readonly id: string,
        public readonly props: IProductDto
    ){}
}