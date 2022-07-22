// product-video.resolver.ts
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Ctx, RequestContext } from '@vendure/core'
import { ProductVideoService } from './product-video.service';

@Resolver()
class ProductVideoResolver {

  constructor(private productVideoService: ProductVideoService) {}

  @Mutation()
  addVideoToProduct(@Args() args: { productId: ID; videoUrl: string; }) {
    return this.productVideoService.transcodeForProduct(
      args.productId, 
      args.videoUrl,
    );
  }

}