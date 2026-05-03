import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe',
})
export class AgePipe implements PipeTransform {
  transform(users: Array<any>, age: number): any {
    return users.filter(user => user.dob.age > age);
  }

}
