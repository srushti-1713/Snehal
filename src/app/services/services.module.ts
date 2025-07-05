import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Required for *ngIf, *ngFor, [ngClass]
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,            // ✅ Import this!
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
