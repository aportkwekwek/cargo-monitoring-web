import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { AddTrucksComponent } from './addtrucks.component';
import { ViewTrucksComponent } from './viewtrucks.component';
// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { TrucksRoutingModule } from './trucks-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TrucksRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyByjFu_uu50Fn1xaZoMr9hJrDiC68Y3X1Y',
      libraries:['places']
    }),
    HttpClientModule
    
 
  ],
  declarations: [
    ViewTrucksComponent,
    AddTrucksComponent
  ],
  providers: [
    GoogleMapsAPIWrapper
  ]
})
  
export class TrucksModule{ }