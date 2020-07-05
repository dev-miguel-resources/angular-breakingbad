import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-death-counting',
  templateUrl: './death-counting.component.html',
  styleUrls: ['./death-counting.component.scss']
})
export class DeathCountingComponent implements OnInit {

  @Input() deathNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
