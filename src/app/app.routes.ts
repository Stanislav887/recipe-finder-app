import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'results/:ingredient',
    loadComponent: () => import('./results/results.page').then( m => m.ResultsPage)
  },
  {
    path: 'chicken',
    loadComponent: () => import('./chicken/chicken.page').then( m => m.ChickenPage)
  },
  {
    path: 'beef',
    loadComponent: () => import('./beef/beef.page').then( m => m.BeefPage)
  },
  {
    path: 'seafood',
    loadComponent: () => import('./seafood/seafood.page').then( m => m.SeafoodPage)
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./details/details.page').then( m => m.DetailsPage)
  },
  {
    path: 'favourites',
    loadComponent: () => import('./favourites/favourites.page').then( m => m.FavouritesPage)
  },
];
