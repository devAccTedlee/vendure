export const extensionRoutes = [  {
    path: 'extensions/greet',
    loadChildren: () => import('./extensions/e8a510266a10f3671bdcd55d01049b443c8dc67dd95c33e87d98da0ebbb8bf18/greeter.module').then(m => m.GreeterModule),
  }];
