import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeInsuranceRoutingModule } from './life-insurance-routing.module';
import { LifeInsuranceComponent } from './life-insurance.component';

@NgModule({
  imports: [
    CommonModule,
    LifeInsuranceRoutingModule
  ],
  declarations: [LifeInsuranceComponent]
})
export class LifeInsuranceModule { }
