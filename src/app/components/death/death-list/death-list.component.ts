import { Component, OnInit, Input } from '@angular/core';

import { Death } from '../../../core/model/death';

@Component({
  selector: 'app-death-list',
  templateUrl: './death-list.component.html',
  styleUrls: ['./death-list.component.scss']
})
export class DeathListComponent implements OnInit {

  @Input() death: Death;

  constructor() { }

  ngOnInit() {
  }

}
