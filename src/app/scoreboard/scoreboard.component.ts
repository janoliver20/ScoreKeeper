import {Component, OnInit} from '@angular/core';
import {AwsService} from './aws.service';
import {Score} from './Scores';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  title = 'Scoreboard';
  // public response: Scores;
  public scoreboard: Score[];
  private API_URL = 'https://94ma30yfwg.execute-api.eu-central-1.amazonaws.com/Prod/';
  displayedColumns: string[] = ['sport', 'playerA', 'playerB', 'score', 'temperature'];
  constructor(private awsService: AwsService) { }

  ngOnInit(): void {
    this.getScore();
  }

  private getScore(): void {
    const url = this.API_URL + 'scores';
    this.awsService.makeCall(url).subscribe(
      data => {
        console.log(data);
        const localScores: Score[] = [];
        for (let i = 0; i < data.Count; i++) {
          const payload = data.Items[i].payload.replace(/\r?\n|\r/g, '').replace(/\\/g, '');
          const score: Score = JSON.parse(payload);
          localScores.push(score);
        }
        this.scoreboard = localScores;
      },
      error => console.log(error)
    );
  }

}
