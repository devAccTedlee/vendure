import {
    dummyPaymentHandler,
    DefaultJobQueuePlugin,
    DefaultSearchPlugin,
    VendureConfig,
    LanguageCode,
} from '@vendure/core'; 
import { defaultEmailHandlers, EmailPlugin } from '@vendure/email-plugin';
import { AssetServerPlugin } from '@vendure/asset-server-plugin';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import { compileUiExtensions } from '@vendure/ui-devkit/compiler';
import path from 'path';
import { RandomCatPlugin } from '../RandomCatPlugin';
import { ReviewsPlugin } from './ui-extensions/review-widget/reviews-plugin';

export const config: VendureConfig = {
    apiOptions: {
        port: 3000,
        adminApiPath: 'admin-api',
        adminApiPlayground: {
            settings: {
                'request.credentials': 'include',
            } as any,
        },// turn this off for production
        adminApiDebug: true, // turn this off for production
        shopApiPath: 'shop-api',
        shopApiPlayground: {
            settings: {
                'request.credentials': 'include',
            } as any,
        },// turn this off for production
        shopApiDebug: true,// turn this off for production
    },
    authOptions: {
        superadminCredentials: {
            identifier: 'superadmin',
            password: 'superadmin',
        },
        cookieOptions: {
          secret: process.env.COOKIE_SECRET || 'cookie-secret',
        },
    },
    dbConnectionOptions: {
        type: 'postgres',
        synchronize: true, // turn this off for production
        logging: false,
        database: 'vendure',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'aa1327',
        migrations: [path.join(__dirname, '../migrations/*.ts')],
    },
    paymentOptions: {
        paymentMethodHandlers: [dummyPaymentHandler],
    },
    customFields: {
        Product: [
            {
                name: 'intensity', type: 'int', min: 0, max: 100, defaultValue: 0,
                ui: { component: 'slider-form-input' }
            },            
        ],
    },
    plugins: [
        AssetServerPlugin.init({
            route: 'assets',
            assetUploadDir: path.join(__dirname, '../static/assets'),
        }),
        DefaultJobQueuePlugin.init({ useDatabaseForBuffer: true }),
        DefaultSearchPlugin.init({ bufferUpdates: false, indexStockStatus: true }),
        EmailPlugin.init({
            devMode: true,
            outputPath: path.join(__dirname, '../static/email/test-emails'),
            route: 'mailbox',
            handlers: defaultEmailHandlers,
            templatePath: path.join(__dirname, '../static/email/templates'),
            globalTemplateVars: {
                // The following variables will change depending on your storefront implementation
                fromAddress: '"example" <noreply@example.com>',
                verifyEmailAddressUrl: 'http://localhost:8080/verify',
                passwordResetUrl: 'http://localhost:8080/password-reset',
                changeEmailAddressUrl: 'http://localhost:8080/verify-email-address-change'
            },
        }),
        
        AdminUiPlugin.init({
            route: 'admin',
            port: 5001,
            app: compileUiExtensions({
                outputPath: path.join(__dirname, 'admin-ui'),
                extensions: [{
                  extensionPath: path.join(__dirname, 'ui-extensions'),
                  translations: {
                    ko: path.join(__dirname,'./translations/ko'),
                  },
                  ngModules: [
                    {
                      type: 'lazy',
                      route: 'greet',
                      ngModuleFileName: 'greeter.module.ts',
                      ngModuleName: 'GreeterModule',
                    },
                    {
                      type: 'shared',
                      ngModuleFileName: 'greeter-shared.module.ts',
                      ngModuleName: 'GreeterSharedModule',
                    },
                    {
                        type: 'shared',
                        ngModuleFileName: 'actionbar-btn.ts',
                        ngModuleName: 'SharedExtensionModule',
                    },
                  ],
                }],
            }),
            adminUiConfig:{
                defaultLanguage: LanguageCode.en,
                availableLanguages: [LanguageCode.en, LanguageCode.ko],
            }
        }),
        RandomCatPlugin,
        ReviewsPlugin,
    ],
};
