import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }


   onSubmit = async(value: any) => {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(value["number"].length != 10 ){
     alert("phone number is incorrect");
   }
   else if (!emailRegex.test(value["email"])) {
    alert("Invalid Email");
  }
   else{
     const URL = "/signin"
     const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        number:value["number"],
        name:value["name"],
        email:value["email"],
        password: value["password"],
      }),
      headers:{
        "Content-type":"application/json",
      }
    });
    if(response.status == 200){
       console.log("user added");
       this.toastr.success('Account Created!', 'Have fun!');
         setTimeout(()=>{
          this.router.navigate(['/login']);
       },3000);

    }
    else if(response.status == 403){
      alert("Student already exists");
    }

   }
  }




}
