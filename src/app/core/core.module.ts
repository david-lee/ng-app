import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ConfigService } from './config.service';
import { NotFoundComponent } from './not-found.component';
import { MessageService } from './message.service';
// modules from vendors
import { CollapseModule } from 'ng2-bootstrap/collapse';

@NgModule({
  imports: [ CommonModule, CollapseModule.forRoot() ],
  declarations: [ NavbarComponent, NotFoundComponent ],
  providers: [ ConfigService, MessageService ],
  exports: [ NavbarComponent ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
