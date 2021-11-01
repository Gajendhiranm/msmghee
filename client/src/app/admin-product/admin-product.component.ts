import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
 public datas : any = [];
  constructor() { }

  ngOnInit() {
        this.getdata();
  }


  getdata = async() => {
    const data = await fetch('/admin-product')
    .then(response => response.json())
    .then(data => this.datas=[...data]);

    console.log(this.datas);
    
  }
  
}
