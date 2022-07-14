export const extensionRoutes = [  {
    path: 'extensions/greet',
    loadChildren: () => import('./extensions/8c533f7b0a6c3d0c33a6028b7578298139f821c251722f396342f38c07d951eb/greeter.module').then(m => m.GreeterModule),
  }];
