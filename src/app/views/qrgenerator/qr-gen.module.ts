
import { NewTaskComponent } from './newtask.component';
import { QrGenRoutingModule } from './qrgen-routing.module';
import { ViewTasksComponent } from './tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    QrGenRoutingModule,
    QRCodeModule
    
  ],
  declarations: [
    ViewTasksComponent,
    NewTaskComponent
  ],
  providers: [
  ]
})
  
export class QrGenModule{ }