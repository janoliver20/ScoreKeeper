import {Component, Input, OnInit} from '@angular/core';
import {AWSService} from 'aws-sdk/clients/auditmanager';
import {AwsService} from '../scoreboard/aws.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() title: string;

  private url =  'https://94ma30yfwg.execute-api.eu-central-1.amazonaws.com/Prod/';

  constructor(private awsService: AwsService) { }

  ngOnInit(): void {
  }

}
