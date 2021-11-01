import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router :Router ) { }

  ngOnInit(): void {
  }


onSubmit = (value : any) => {
  console.log(value.number , value.password)
  if(value.number = 8098860669 && value.password === "admin"){
    this.router.navigate(['/admin-product'])
  }
}



}
