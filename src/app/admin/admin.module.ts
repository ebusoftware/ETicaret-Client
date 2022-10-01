import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './layout/components/components.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule,
    HttpClientModule,


  ],
  exports:  [
    LayoutModule, //çıktısını vermeyi unutma!
    
  ]
})
export class AdminModule { }
