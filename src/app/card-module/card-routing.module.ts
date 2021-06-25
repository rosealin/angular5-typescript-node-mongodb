import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardListComponent } from './card-list/card-list.component';
import { NewCardInputComponent } from './new-card-input/new-card-input.component'
const routes: Routes = [
    {
        path: 'list',
        component: CardListComponent
    },
    {
        path: 'new-user',
        component: NewCardInputComponent
    }
];
   
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CardRoutingModule { }