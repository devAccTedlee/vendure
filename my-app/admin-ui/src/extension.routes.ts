export const extensionRoutes = [  {
    path: 'extensions/greet',
    loadChildren: () => import('./extensions/6bbe0c03040e6193dde0f90c6b68dcb752a897abfb2255809e0985fa74d945eb/greeter.module').then(m => m.GreeterModule),
  }];
