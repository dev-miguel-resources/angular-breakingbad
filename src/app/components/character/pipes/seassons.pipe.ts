import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seassons'
})
export class SeassonsPipe implements PipeTransform {

  transform(value: any): any {
    return value.length;
  }

}
