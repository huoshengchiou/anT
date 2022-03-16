import { Routes } from '@angular/router';

// 根據不同的routing set切換layout

const RoutingA: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('../features/builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

const RoutingB: Routes = [
  {
    path: 'fa',
    loadChildren: () =>
      import('../features/feature-a/pages/page-a/page-a.module').then(
        (m) => m.PageAModule
      ),
  },
  {
    path: 'fa2',
    loadChildren: () =>
      import('../features/feature-a/pages/page-a2/page-a2.module').then(
        (m) => m.PageA2Module
      ),
  },
  {
    path: 'fb',
    loadChildren: () =>
      import('../features/feature-b/pages/page-b/page-b.module').then(
        (m) => m.PageBModule
      ),
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { RoutingA, RoutingB };
