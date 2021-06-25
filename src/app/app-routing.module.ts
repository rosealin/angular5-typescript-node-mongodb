import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.module/home/home.component'
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'user',
    loadChildren: 'app/card-module/card.module#AllCardModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }