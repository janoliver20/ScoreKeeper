import { Component, OnInit } from '@angular/core';
import {GameStart} from './GameStart';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss']
})
export class GameStartComponent implements OnInit {
  playerA = '';
  playerB = '';
  sport = '';

  constructor() { }

  ngOnInit(): void {
  }

  public start(): void {
    if (this.playerA === '' || this.playerB === '' || this.sport === '') {
      alert('Please enter a value in all inputs');
    }
    else {
      let newGame: GameStart = {sport: this.sport, namePlayerA: this.playerA, namePlayerB: this.playerB};
    }
  }

}
