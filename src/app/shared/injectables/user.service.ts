import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor (
    private http: Http
  ) {

    // this.currentUserSubject.subscribe((val) => {
    //   console.log(val)
    // })
  }
  getUser() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
    .map((res:Response) => res.json());
  }

  // private currentUserSubject = new BehaviorSubject<string>('Erin');
  // public currentUser = this.currentUserSubject.asObservable();

  // setUser(name) {
  //   this.currentUserSubject.next(name);
  // }

}
