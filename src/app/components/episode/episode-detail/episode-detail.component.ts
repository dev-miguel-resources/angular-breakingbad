import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../../../core/model/episode';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {
 
  @Input() episode: Episode;

  constructor() { 

  }

  ngOnInit() {

  }

}
