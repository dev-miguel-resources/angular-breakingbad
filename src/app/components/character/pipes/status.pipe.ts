import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any): any {
    let status_ES = '';
    if (value === 'Alive') {
      status_ES = 'Vivo';
    } else if (value === 'Deceased') {
      status_ES = 'Fallecido';
    } else if (value === 'Presumed dead') {
      status_ES = 'Presunto Muerto';
    } else if (value === 'Unknown') {
      status_ES = 'Desconocido';
    } else  {
      status_ES = value;
    }
    return status_ES;
  }

}
