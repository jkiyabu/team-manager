import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable }
from 'angularfire2';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, position: string, description: string) {
    if(name === '' || position === '' || description === '') {
      alert('Please enter all information!')
    } else {
      var newPlayer: Player = new Player(name, position, description);
      this.playerService.addPlayer(newPlayer);
    }
  }

}
