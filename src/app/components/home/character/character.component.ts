import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../../core/model/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() character: Character;

  constructor(private router: Router) { 

  }

  ngOnInit() {
  }

  onMoreInformation(characterId: number): void {
    this.router.navigate(['characterDetail', characterId] )
  }

}
