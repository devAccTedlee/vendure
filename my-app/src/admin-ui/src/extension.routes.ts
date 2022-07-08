export const extensionRoutes = [  {
    path: 'extensions/greet',
    loadChildren: () => import('./extensions/0592a3aecc2ed51477ca268b9b1253fc0ee517843131a1e1a374321a0b8dcaa6/greeter.module').then(m => m.GreeterModule),
  }];
