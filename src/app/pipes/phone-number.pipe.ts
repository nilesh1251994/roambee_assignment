import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash'
@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var s2 = (""+value).replace(/\D/g, '');
    var m = s2.match(/^(\d{3})(\d{3})(\d{4,})$/);
    return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
  }

}
