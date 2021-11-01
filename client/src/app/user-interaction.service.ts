import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInteractionService {
  private _message = new Subject<boolean>();
  private _user = new Subject()
  isUser$ = this._message.asObservable();
  user$ = this._user.asObservable();
  constructor() { }

  setUser(message : boolean){
    this._message.next(message);

  }

 UserDetails(userDetail : any){
    this._user.next(userDetail)
 }





}
