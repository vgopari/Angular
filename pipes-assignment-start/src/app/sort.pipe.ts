import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any) {
    let sort = value.sort((a, b) => (a.name < b.name ? -1 : 1));
    return sort;
  }
}
