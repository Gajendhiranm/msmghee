import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  public user : Object = {};
  constructor() { }


  setUser(){
    return  this.user = localStorage.getItem("user")
  }

}
