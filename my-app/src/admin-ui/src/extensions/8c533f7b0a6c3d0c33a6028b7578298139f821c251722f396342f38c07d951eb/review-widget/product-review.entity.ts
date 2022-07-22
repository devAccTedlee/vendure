// product-review.entity.ts
import { DeepPartial } from '@vendure/common/lib/shared-types';
import { VendureEntity } from '@vendure/core';
import { Column, Entity } from 'typeorm';

@Entity()
export class ProductReview extends VendureEntity {
  constructor(input?: DeepPartial<ProductReview>) {
    super(input);
  }

  @Column()
  text: string;
  
  @Column()
  rating: number;
}