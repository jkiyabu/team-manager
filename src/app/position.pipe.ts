import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  transform(input: Player[], desiredPosition) {
    var output: Player[] = [];
    if(desiredPosition === "guard") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === 'guard') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPosition === "forward") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === 'forward') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPosition === "center") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === 'center') {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
