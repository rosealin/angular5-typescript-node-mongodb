import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from '../pages/pages.module'
import { AppRoutingModule } from '../app-routing.module';
import { ShareModule } from '../share/share.module';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PagesModule,
    ShareModule,
    AppRoutingModule,
  ],
  declarations: [],
  exports:[
    ShareModule,
    AppRoutingModule,
  ]
})
export class CoreModule { }
