import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { NewCardInputComponent } from './new-card-input/new-card-input.component';

import { CardRoutingModule } from './card-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {CardService} from './services/card.service';


import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    
    CardRoutingModule,

    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  providers: [CardService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  declarations: [CardListComponent, CardComponent, NewCardInputComponent]
})
export class AllCardModule { }
