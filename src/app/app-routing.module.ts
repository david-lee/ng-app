import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './core/not-found.component';
import { AuthGuard } from './core/auth-guard.service';

// Define Routes
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [ AuthGuard ] },
  { 
    path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
    canLoad: [ AuthGuard ]
  },

  // otherwise show notfound component
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { 
  constructor() {
    console.log('AppRoutingModule....');
  }
}
