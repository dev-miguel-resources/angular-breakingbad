import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'episode',
        loadChildren: () => import('./components/episode/episode.module').then(m => m.EpisodeModule)
      },
      {
        path: 'deaths',
        loadChildren: () => import('./components/death/death.module').then(m => m.DeathModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'characterDetail/:id',
        loadChildren: () => import('./components/character/character.module').then(m => m.CharacterModule)
      },
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
