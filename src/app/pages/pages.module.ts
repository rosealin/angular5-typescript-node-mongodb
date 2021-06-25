import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module'
import { HomeModule } from '../home.module/home.module';


@NgModule({
  imports: [
    ShareModule,
    HomeModule,
  ],
  declarations: [],
  exports:[
  ]
})
export class PagesModule { }
