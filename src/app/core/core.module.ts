import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { NavbarComponent } from './navbar.component';
import { ConfigService } from './config.service';
import { NotFoundComponent } from './not-found.component';
import { MessageService } from './message.service';
import { LocalStorageService } from './local-storage.service';
import { AuthGuard } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { FakeBackendService } from './fake-backend.service';
// modules from vendors
import { CollapseModule } from 'ng2-bootstrap/collapse';

@NgModule({
  imports: [ CommonModule, CollapseModule.forRoot() ],
  declarations: [ NavbarComponent, NotFoundComponent ],
  exports: [ NavbarComponent ],
  providers: [ 
    ConfigService, 
    MessageService, 
    LocalStorageService, 
    AuthenticationService,
    AuthGuard,

    // create a fake backend
    FakeBackendService,
    MockBackend,
    BaseRequestOptions
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
