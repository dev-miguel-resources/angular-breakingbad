import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import swal from 'sweetalert2';

import { CharacterService } from '../../../core/services/character.service';
import { Character } from '../../../core/model/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  loading: boolean;
  character: Character;

  constructor(private route: ActivatedRoute, private router: Router, private characterService: CharacterService) { 
    this.loading = true;
    this.character = null;
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.findCharacterById(id);
  }

  onBack() {
    this.router.navigate(['/'] )
  }

  private findCharacterById(id: number): void {
    
    if (isNaN(id) || id === null || id <= 0) {
      swal.fire('La ID ingresa no es válida', 'Asegurate ingresando desde la botón ver más en las tarjetas de los personajes', 'error');
      this.router.navigate(['character-not-found'] )
      return;
    }
    
    this.characterService.findCharacterById(id).pipe(take(1)).subscribe(resp => {
      this.character = resp[0];
      this.loading = false;
    },
    error => {
      swal.fire('Ha Ocurrido un error', 'Intente nuevamente, sí el problema persiste puede que el servicio no este funcionando.', 'error');
    });

  }

}
