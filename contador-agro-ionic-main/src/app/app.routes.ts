import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'steps',
    redirectTo: 'steps/1',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'notas-emitidas',
    loadComponent: () =>
      import('./pages/notas-emitidas/notas-emitidas.page').then(
        (m) => m.NotasEmitidasPage
      ),
  },
  {
    path: 'steps',
    loadComponent: () =>
      import('./pages/steps/steps.page').then((m) => m.StepsPage),
    children: [
      {
        path: '1',
        loadComponent: () =>
          import('./pages/steps/step-1/step-1.component').then(
            (module) => module.Step1Component
          ),
      },
      {
        path: '2',
        loadComponent: () =>
          import('./pages/steps/step-2/step-2.component').then(
            (module) => module.Step2Component
          ),
      },
      {
        path: '3',
        loadComponent: () =>
          import('./pages/steps/step-3/step-3.component').then(
            (module) => module.Step3Component
          ),
      },
    ],
  },
  {
    path: 'documentos',
    loadComponent: () => import('./documentos/documentos.page').then( m => m.DocumentosPage)
  },
];
