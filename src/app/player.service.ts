import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.players = angularFire.database.list('players');
  }

  getPlayers() {
    return this.players;
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  updatePlayer(localUpdatedPlayer) {
    var playerEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
    playerEntryInFirebase.update({name: localUpdatedPlayer.name, position: localUpdatedPlayer.position, description: localUpdatedPlayer.description});
  }

  deletePlayer(localDeletedPlayer) {
    var playerEntryInFirebase = this.getPlayerById(localDeletedPlayer.$key);
    playerEntryInFirebase.remove();
  }

  getPlayerById(playerId: string) {
    return this.angularFire.database.object('players/' + playerId);
  }
}
