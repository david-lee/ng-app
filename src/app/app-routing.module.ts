import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }
  // { path: 'profile', loadChildren: ''},
  // { path: 'dashboard', loadChildren: ''},
  // { path: 'life-insurance', loadChildren: ''}
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
