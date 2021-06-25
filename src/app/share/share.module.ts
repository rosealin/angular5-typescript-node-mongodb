import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports:[
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,

    FormsModule,
    ReactiveFormsModule,

  ]
})
export class ShareModule { }
