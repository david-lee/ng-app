import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoignRoutingModule } from './loign-routing.module';
import { LoignComponent } from './loign.component';

@NgModule({
  imports: [
    CommonModule,
    LoignRoutingModule
  ],
  declarations: [LoignComponent]
})
export class LoignModule { }
