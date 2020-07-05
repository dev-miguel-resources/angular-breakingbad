import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material/material.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { DeathRoutingModule } from './death-routing.module';
import { DeathComponent } from './death.component';
import { DeathListComponent } from './death-list/death-list.component';
import { DeathCountingComponent } from './death-counting/death-counting.component';
import { RandomDeathComponent } from './random-death/random-death.component';



@NgModule({
  declarations: [
    DeathComponent, 
    DeathListComponent,
    DeathCountingComponent,
    RandomDeathComponent
  ],
  imports: [
    CommonModule,
    DeathRoutingModule,
    MaterialModule,
    NgxPaginationModule
  ]
})

export class DeathModule { }
