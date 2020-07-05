import { Component, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';

import swal from 'sweetalert2';

import { EpisodeService } from '../../core/services/episode.service';
import { Episode } from '../../core/model/episode';
import { Filter } from '../../core/model/filter';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  episodeList: Episode[];
  pageSize: number;
  page: number;
  totalRecords: number;
  loading: boolean;

  constructor(private episodeService: EpisodeService) { 
    this.page = 1;
    this.pageSize = 4;
    this.episodeList = [];
    this.loading = true;
  }

  ngOnInit() {
    this.findAllEpisodes();
  }

  onSearch(filter: Filter): void {
    this.loading = true;
    if (filter.serieId || (filter.serieName || filter.serieName !== '')) {
      let searchingById = false;
      let searchingBySerie = false;
      
      if (!isNaN(filter.serieId) && filter.serieId > 0 ) {
        searchingById = true;
      }

      if (filter.serieName && filter.serieName !== '') {
        searchingBySerie = true;
      }

      if (searchingById && searchingBySerie) {
        this.specialSearch(filter.serieId, filter.serieName);
      } else if (searchingById) {
        this.findEpisodeById(filter.serieId);
      } else if (searchingBySerie) {
        this.findEpisodeBySerie(filter.serieName);
      }
    } else {
      this.findAllEpisodes();
    }
  }

  pageChanged(page: number): void {
    this.page = page;
  }

  private findEpisodeById(id: number): void {
    this.episodeService.findEpisodeById(id).pipe(take(1)).subscribe(
      resp => {
      if (resp.length > 0) {
        this.episodeList = resp;
        this.episodeList.forEach(episode => {
          episode.serieImg = this.getImageForSerie(episode.series);
        });
        this.totalRecords = this.episodeList.length;
      } else {
        swal.fire('Ups', `La ID ${id} que estas buscando no existe.`, 'error');
      }
      this.loading = false;
    },
    error => {
      swal.fire('Ha Ocurrido un error', 'Intente nuevamente, sí el problema persiste puede que el servicio no este funcionando.', 'error');
    });
  }

  private findEpisodeBySerie(serie: string): void {
    this.episodeService.findEpisodeBySerie(serie).pipe(take(1)).subscribe(
      resp => {
      this.episodeList = resp;
      this.episodeList.forEach(episode => {
        episode.serieImg = this.getImageForSerie(episode.series);
      });
      this.totalRecords = this.episodeList.length;
      this.loading = false;
    },
    error => {
        swal.fire('Ha Ocurrido un error', 'Intente nuevamente, sí el problema persiste puede que el servicio no este funcionando.', 'error');
    });
  }

  private findAllEpisodes(): void {
    this.episodeService.findAllEpisodes().pipe(take(1)).subscribe
    (resp => {
      this.episodeList = resp;
      this.episodeList.forEach(episode => {
        episode.serieImg = this.getImageForSerie(episode.series);
      });
      this.totalRecords = this.episodeList.length;
      this.loading = false;
    },
    error => {
      swal.fire('Ha Ocurrido un error', 'Intente nuevamente, sí el problema persiste puede que el servicio no este funcionando.', 'error');
    });
  }

  private specialSearch(id: number, serie: string) {
    const isIDFound = ( { episode_id }) => episode_id === id;
    
    const newEpisodeArray = this.episodeList.find(isIDFound);

    if (newEpisodeArray && newEpisodeArray.series === serie) {
      this.episodeList = [];
      this.episodeList.push(newEpisodeArray);
    } else {
      swal.fire('Ups', `La ID ${id} que estas buscando no existe en la categoría seleccionada.`, 'error');
    }
    this.loading = false;
  }

  private getImageForSerie(serie: string): string {
    const BREAKING_BAD = 'breaking bad';
    let imagePath = '';
    if (BREAKING_BAD === serie.toLocaleLowerCase()) {
      imagePath = 'assets/images/breakingbad.jpg';
    } else {
      imagePath = 'assets/images/better-call-saul.jpg';
    }
    return imagePath;
  }

}
