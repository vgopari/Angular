import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredStr: string, propName: string): any {
    if(value.length === 0 || filteredStr === ''){
      return value;
    }
    const resultArr = [];
    for(let item of value) {
      if(item[propName] === filteredStr){
        resultArr.push(item);
      }
    }
    return resultArr;
  }

}
