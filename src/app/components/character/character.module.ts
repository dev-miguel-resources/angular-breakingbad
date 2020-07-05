import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { MaterialModule } from '../../material/material.module';
import { StatusPipe } from './pipes/status.pipe';
import { SeassonsPipe } from './pipes/seassons.pipe';
import { OcupationsPipe } from './pipes/ocupations.pipe';


@NgModule({
  declarations: [
    CharacterDetailComponent,
    StatusPipe,
    SeassonsPipe,
    OcupationsPipe
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    MaterialModule
  ]
})
export class CharacterModule { }
