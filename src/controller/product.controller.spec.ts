import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';
import { DatabaseModule } from '../configuration/database/database.module';
import { productProviders } from '../persistence/product/product.provider';
import { CommandHandler } from '../domain/product/command/handler';
import { ModuleTokenFactory } from '@nestjs/core/injector/module-token-factory';
import { Product } from '../persistence/product/product.entity';
jest.setTimeout(1999999)
describe('ProductController', () => {
  let productController: ProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
        imports: [CqrsModule, DatabaseModule],
        controllers: [ProductController],
        providers: [...productProviders, ...CommandHandler],
    })
    .overrideProvider(QueryBus)
    .useValue({
      setModuleRef: jest.fn(),
      handlers: jest.fn(),
      publish: jest.fn(),
      execute: jest.fn()
    }).compile();

    productController = app.get<ProductController>(ProductController);
  });

  describe('ProductController', () => {
      describe("get /products", () => {
        it('should return list of product', async () => {
            const result = new Product()
            jest.spyOn(productController, 'getAllProducts').mockImplementationOnce(() => Promise.resolve([result])); 
            const final = await productController.getAllProducts()
            expect(final).toStrictEqual([result])
        });
      });

      describe("get /products/id", () => {
        it('should return l', async () => {
            const result = new Product()
            jest.spyOn(productController, 'getProductById').mockImplementationOnce(() => Promise.resolve(result)); 
            const final = await productController.getAllProducts()
            expect(final).toStrictEqual(result)
        });
      })
    

    

    it('should return list of product', async () => {
        const result = new Product()
        jest.spyOn(productController, 'getAllProducts').mockImplementationOnce(() => Promise.resolve([result])); 
        const final = await productController.getAllProducts()
        expect(final).toStrictEqual([result])
    });


  });
});
