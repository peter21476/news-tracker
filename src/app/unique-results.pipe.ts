import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 

@Pipe({
  name: 'filterUnique',
  pure: false
})
export class UniqueResultsPipe implements PipeTransform {

  transform(value: any): any{
    if(value!== undefined && value!== null){
        return _.sortBy(_.uniqBy(value, 'section'), 'section');
    }
    return value;
}

}
