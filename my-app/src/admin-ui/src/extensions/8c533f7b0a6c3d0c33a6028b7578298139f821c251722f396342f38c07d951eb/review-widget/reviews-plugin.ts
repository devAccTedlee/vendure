// reviews-plugin.ts
import { VendurePlugin } from '@vendure/core';
import { ProductReview } from './product-review.entity';

@VendurePlugin({
  entities: [ProductReview],
})
export class ReviewsPlugin {}