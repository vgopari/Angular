import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

  transform(value: string) {
      let res = value.split('');
      res.reverse();
      let result = res.join('');
      return result;
  }

}
