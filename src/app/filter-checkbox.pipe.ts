import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterCheckbox'
})
export class FilterCheckboxPipe implements PipeTransform {
  transform(value: any, men: boolean, woman: boolean, children: boolean): any {
     return value.filter(function (item) {

       let str = men ? 'men' : '';
       str += woman ? 'woman' : '';
       str += children ? 'children' : '';

       return str.indexOf(item.sex) > -1;
      });
  }
}
