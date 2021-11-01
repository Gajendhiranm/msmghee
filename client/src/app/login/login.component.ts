import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailService } from '../user-detail.service';
import { UserInteractionService } from '../user-interaction.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private _userInteract : UserInteractionService,
    private set : UserDetailService) { }

  ngOnInit(): void {
  }

  onSubmit = async(value: any) => {

    if(value.number.length != 10){
      alert("phone number is incorrect")
    }
    else{
      const URL = "/login"
      const response = await fetch(URL, {
       method: "POST",
       body: JSON.stringify({
        number:value.number,
        password:value.password,
       }),
       headers:{
         "Content-type":"application/json",
       }
     });
     if(response.status == 200){
        let currentUser = await response.json();
        localStorage.setItem("user",JSON.stringify(currentUser));
        let isUser = localStorage.getItem("user");
        if(JSON.parse(isUser).name.length != 0){
            let isAlive = true;
            this._userInteract.setUser(isAlive);

            this._userInteract.UserDetails(currentUser);

         }
        this.router.navigate(['/product']);
     }
     else if(response.status == 404){
       alert("user not found");
     }
     else if(response.status === 401) alert("incorrect password");
      else alert("error");
    }
  }
}
