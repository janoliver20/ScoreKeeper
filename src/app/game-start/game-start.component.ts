import { Component, OnInit } from '@angular/core';
import {GameStart} from './GameStart';
import {AwsService} from '../scoreboard/aws.service';
import {ScoreboardComponent} from '../scoreboard/scoreboard.component';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss']
})
export class GameStartComponent implements OnInit {
  playerA = '';
  playerB = '';
  sport = '';

  sports =  ['Tabletennis', 'Tennis'];

  private url = 'https://94ma30yfwg.execute-api.eu-central-1.amazonaws.com/Prod/publish';


  constructor(private awsService: AwsService) { }

  ngOnInit(): void {
  }

  public start(): void {
    if (this.playerA === '' || this.playerB === '' || this.sport === '') {
      alert('Please enter a value in all inputs');
    }
    else {
      const newGame = {sport: this.sport, namePlayerA: this.playerA, namePlayerB: this.playerB};
      this.awsService.sendCall(this.url, newGame);
    }
  }

}
