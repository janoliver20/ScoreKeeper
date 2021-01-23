import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RawScore} from './RawScore';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  constructor(private httpClient: HttpClient) { }

  public makeCall(url: string): Observable<RawScore> {
    return this.httpClient.get<RawScore>(url);
  }

  public sendCall(url: string, body: any): void {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    console.log(JSON.stringify(body));
    this.httpClient.post<any>(url, body, config).subscribe(
      data => {
        console.log('Data: ' + JSON.stringify(data));
      },
      error => console.log('Error: ' + JSON.stringify(error))
    );
  }
}
