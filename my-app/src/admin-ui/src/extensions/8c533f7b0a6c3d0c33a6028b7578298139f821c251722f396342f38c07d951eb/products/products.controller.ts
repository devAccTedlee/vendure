// products.controller.ts
import { Controller, Get } from '@nestjs/common';
import { Ctx, ProductService, RequestContext } from '@vendure/core'; 

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  findAll(@Ctx() ctx: RequestContext) {
    return this.productService.findAll(ctx);
  }
}