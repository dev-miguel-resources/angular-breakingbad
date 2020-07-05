import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeComponent } from './episode.component';
import { SearchEpisodeComponent } from './search-episode/search-episode.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    EpisodeComponent,
    SearchEpisodeComponent,
    EpisodeDetailComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    FormsModule,
    MaterialModule,
    NgxPaginationModule
  ]
})
export class EpisodeModule { }
