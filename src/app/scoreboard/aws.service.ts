import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
    this.httpClient.post(url, body);
  }
}
