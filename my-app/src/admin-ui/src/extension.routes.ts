export const extensionRoutes = [  {
    path: 'extensions/greet',
    loadChildren: () => import('./extensions/27fe569634f0daa3262bbdd522c8167ca79f20f07a1d440f66387bec1d46702d/greeter.module').then(m => m.GreeterModule),
  }];
