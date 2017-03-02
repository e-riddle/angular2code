import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Sponsor } from './sponsor';
import { Speaker } from './speaker';
import { Session } from './session';

@Injectable()
export class DataService {
  private dataUrl = 'assets/data/2017-1.json';

  //inject http into constructor
  constructor(private http: Http) { }

  getSponsors(): Observable<Sponsor[]> {
    return this.http.get(this.dataUrl)
      .map(this.extractSponsor) //automaps and pops data in
      .catch(this.handleError);
  }

  private extractSponsor(res: Response) {
    let body = res.json();
    // console.log(body);
    return body.sponsors || {};
  }

  getSpeakers(): Observable<Speaker[]> {
    return this.http.get(this.dataUrl)
      .map(this.extractSpeaker)
      .catch(this.handleError);
  }

  private extractSpeaker(res: Response) {
    let body = res.json();
    // console.log(body);
    return body.speakers || {};
  }

  getFriday(): Observable<Session[]> {
    return this.http.get(this.dataUrl)
      .map(this.extractFriday)
      .catch(this.handleError);
  }

  private extractFriday(res: Response) {
    let body = res.json();
    // console.log(body);
    return body.friday || {};
  }

  getSaturday(): Observable<Session[]> {
    return this.http.get(this.dataUrl)
      .map(this.extractSaturday)
      .catch(this.handleError);
  }

  private extractSaturday(res: Response) {
    let body = res.json();
    // console.log(body);
    return body.sessions || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
