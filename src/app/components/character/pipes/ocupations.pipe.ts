import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocupations'
})
export class OcupationsPipe implements PipeTransform {

  transform(value: any): any {
    if (value.join().includes(',')) {
      return value.join().replace(',', ', ');
    } else {
      return value.join();
    }
    
  }

}
