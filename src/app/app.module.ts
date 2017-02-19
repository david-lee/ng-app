import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// root app component
import { AppComponent } from './app.component';
// root routing module
import { AppRoutingModule } from './app-routing.module';
// feature modules
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    CoreModule,
    LoginModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { 
}
