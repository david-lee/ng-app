import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule   
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { 
  constructor() {
    console.log('LoginModule...');
  }

}
