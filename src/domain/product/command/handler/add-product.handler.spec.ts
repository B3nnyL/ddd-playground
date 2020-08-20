
import { Test, TestingModule } from '@nestjs/testing';
import { Product } from '../../../../persistence/product/product.entity';
import { DatabaseModule } from '../../../../configuration/database/database.module';
import { AddProductHandler } from './add-product.handler';
import { AddProductCommand } from '../impl/add-product.command';


describe("add product handler", () => {

    let handler: AddProductHandler
    const mockProduct = [{
        id: "959b8503-a62d-4740-93a3-8ef5091ff879",
        name: "product",
        description: "this is a mock",
        price: 123.4
    }]
    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [DatabaseModule],
            providers: [AddProductHandler, 
                {
                    provide: 'PRODUCT_REPOSITORY',
                    useValue:({
                        find: () => [mockProduct],
                        insert: () => [{}]
                    
                })
                }
            ]
        }).compile();

            console.log(module)
        handler = module.get<AddProductHandler>(AddProductHandler);
    });

    it("should return success", async () => {
         const mockRepository = {
            data: [
                { id: 1, email: 'test1@email.com', password: '' },
                { id: 2, email: 'valid@email.com', password: '' },
            ],
        };

        const command = new AddProductCommand({ name: "hello", description: "this is a mock", price: 123.2 })
        const result = await handler.execute(command)
        expect(result.message).toBe('A new Product is added')
        expect(result.statusCode).toBe(200)

    })
})
