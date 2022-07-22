// product-video.plugin.ts
import gql from 'graphql-tag';
import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { ProductVideoService } from './product-video.service'
import { ProductVideoResolver } from './product-video.resolver'

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [ProductVideoService],
  adminApiExtensions: {
    schema: gql`
      extend type Mutation {
        addVideoToProduct(productId: ID! videoUrl: String!): Job!
      }
    `,
    resolvers: [ProductVideoResolver]
  },
  configuration: config => {
    config.customFields.Product.push({
      name: 'videoUrl',
      type: 'string',
    });
    return config;
  }
})
export class ProductVideoPlugin {}