import { Component, OnInit, Input } from '@angular/core';
import { Death } from 'src/app/core/model/death';

@Component({
  selector: 'app-random-death',
  templateUrl: './random-death.component.html',
  styleUrls: ['./random-death.component.scss']
})
export class RandomDeathComponent implements OnInit {

  @Input() death: Death;

  constructor() { }

  ngOnInit() {
  }

}
