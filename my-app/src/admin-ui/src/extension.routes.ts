export const extensionRoutes = [  {
    path: 'extensions/greet',
    loadChildren: () => import('./extensions/08dc7c3732f71806e357151f3ad32e891a50bafaa08589b13ccf12cc32538148/greeter.module').then(m => m.GreeterModule),
  }];
