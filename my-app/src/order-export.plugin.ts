import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import path from 'path';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import {
  OrderExportController,
  OrderExportResolver,
} from './ui-extensions/orderExport/api/order-export.controller';
import { DefaultExportStrategy, orderExportPermission } from './ui-extensions/orderExport/index';
import { ExportStrategy } from './ui-extensions/orderExport/api/export-strategy';
import { PLUGIN_INIT_OPTIONS } from './ui-extensions/orderExport/constants';
import gql from 'graphql-tag';

export interface ExportPluginConfig {
  exportStrategies: ExportStrategy[];
}

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [
    {
      provide: PLUGIN_INIT_OPTIONS,
      useFactory: () => OrderExportPlugin.config,
    },
  ],
  adminApiExtensions: {
    resolvers: [OrderExportResolver],
    schema: gql`
      extend type Query {
        availableOrderExportStrategies: [String!]!
      }
    `,
  },
  controllers: [OrderExportController],
  configuration: (config) => {
    config.authOptions.customPermissions.push(orderExportPermission);
    return config;
  },
})
export class OrderExportPlugin {
  static config: ExportPluginConfig;

  static init(config: ExportPluginConfig): Type<OrderExportPlugin> {
    if (!config.exportStrategies?.length) {
      config.exportStrategies.push(new DefaultExportStrategy());
    }
    OrderExportPlugin.config = config;
    return this;
  }

  static ui: AdminUiExtension = {
    extensionPath: path.join(__dirname, './ui-extensions/orderExport/ui'),
    ngModules: [
      {
        type: 'lazy',
        route: 'export-orders',
        ngModuleFileName: 'order-export.module.ts',
        ngModuleName: 'OrderExportModule',
      },
      {
        type: 'shared',
        ngModuleFileName: 'order-export-nav.module.ts',
        ngModuleName: 'OrderExportNavModule',
      },
    ],
  };
}