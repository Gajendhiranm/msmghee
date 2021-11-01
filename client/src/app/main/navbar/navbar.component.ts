import { Component, Input, OnInit } from '@angular/core';

//import { Router } from '@angular/router';
import { UserInteractionService } from 'src/app/user-interaction.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public presentOrNot = false;
  constructor(private _interact : UserInteractionService) { }

  ngOnInit(): void {
      this._interact.isUser$
      .subscribe(
        message =>{
          if(message == true){
            this.presentOrNot = true;
            console.log(message , "from service component");
          }
          else{
            this.presentOrNot = false;
          }

        }
      );
   }

   cleanStorage(){
     localStorage.clear();
     this.presentOrNot = false;
     this._interact.setUser(this.presentOrNot);
     location.reload();
     console.log(this.presentOrNot,"after clearing the local storage")
   }






}
