import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../../core/model/filter';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})
export class SearchCharacterComponent implements OnInit {

  @Output() public filter = new EventEmitter<Filter>();
  @Output() public tryLuck = new EventEmitter<boolean>();

  characterName: string;
  serieSelect: string;

  constructor() { 
    this.characterName = '';
    this.serieSelect = '';
  }

  ngOnInit() {
  }

  onSearch() : void {
    let search: Filter = new Filter();
    search.characterName = this.characterName;

    if (!this.serieSelect) {
      this.serieSelect = '';
    }
    
    search.serieName = this.serieSelect;
    this.filter.emit(search);
  }

  onTryLuck(): void {
    this.tryLuck.emit(true);
  }

}
