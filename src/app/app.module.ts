import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BaseComponent } from './base/base.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule, 
    UiModule,
    BrowserAnimationsModule, //dahil edilmez ise sayfalar arası geçiş olmaz
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule //httpclient' ı kullanabilmek için ekledik.
  ],
  providers: [
    {provide: "baseUrl",useValue:"Https://localhost:7206/api",multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
