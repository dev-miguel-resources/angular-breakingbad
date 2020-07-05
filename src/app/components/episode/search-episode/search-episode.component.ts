import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../../core/model/filter';

@Component({
  selector: 'app-search-episode',
  templateUrl: './search-episode.component.html',
  styleUrls: ['./search-episode.component.scss']
})
export class SearchEpisodeComponent implements OnInit {

  @Output() public filter = new EventEmitter<Filter>();
  serieId: number;
  serieSelect: string;

  constructor() { 
    this.serieSelect = '';
  }

  ngOnInit() {
  }

  onSearch(): void {
    let search: Filter = new Filter();
    search.serieId = this.serieId;
    search.serieName = this.serieSelect;
    this.filter.emit(search);
  }

}
