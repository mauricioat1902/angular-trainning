import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
