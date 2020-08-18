import { IProductDto } from "../../dto/product.dto.interface";

export class AddProductCommand{
    constructor(
        public readonly props: IProductDto
        ){}
}