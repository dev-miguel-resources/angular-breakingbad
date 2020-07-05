import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import swal from 'sweetalert2';

import { DeathService } from '../../core/services/death.service';
import { Death } from '../../core/model/death';


@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.scss']
})

export class DeathComponent implements OnInit {

  deathNumber: number;
  deathList: Death[];
  pageSize: number;
  page: number;
  totalRecords: number;
  loading: boolean;
  singleDeath: Death;

  constructor(private deathService: DeathService) { 
    this.loading = false;
    this.deathNumber = 0;
    this.page = 1;
    this.pageSize = 9;
    this.singleDeath = null;
    this.deathList = [];
  }

  ngOnInit() {
    this.findDeathCount();
    this.findAllDeaths();
  }

  pageChanged(page: number): void {
    this.page = page;
  }

  findByCondition(condition: string): void {
    this.loading = true;
    this.singleDeath = null;
    this.deathList = [];
    if (condition === 'All') {
      this.findAllDeaths();
    } else {
      this.findRandomDeath();
    }
  }

  private findAllDeaths(): void {
    this.deathService.findAllDeaths().pipe(take(1)).subscribe(resp => {
      this.deathList = resp;
      this.totalRecords = this.deathList.length;
      this.loading = false;
    },
    error => {
      swal.fire('Ha Ocurrido un error', 'Intente nuevamente, sí el problema persiste puede que el servicio no este funcionando.', 'error');
    });
  }

  private findRandomDeath(): void {
    this.deathService.findRandomDeath().pipe(take(1)).subscribe(resp => {
      this.singleDeath = resp;
      this.totalRecords = 0;
      this.loading = false;
    },
    error => {
      swal.fire('Ha Ocurrido un error', 'Intente nuevamente, sí el problema persiste puede que el servicio no este funcionando.', 'error');
    });
  }

  private findDeathCount(): void {
    this.deathService.findDeathCount().pipe(take(1)).subscribe(resp => {
        if (resp.length > 0) {
          this.deathNumber =resp[0].deathCount;
        }
    },
    error => {
      swal.fire('Ha Ocurrido un error', 'Intente nuevamente, sí el problema persiste puede que el servicio no este funcionando.', 'error');
    });
  }

}
