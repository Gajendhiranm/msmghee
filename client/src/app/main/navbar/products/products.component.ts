import { Component, OnInit } from '@angular/core';
import { OrderListService } from 'src/app/order-list.service';
import { UserDetailService } from 'src/app/user-detail.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public user : Object = {};
  public products : any = [];
  public username ="";
   constructor(private set : UserDetailService,private order : OrderListService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
     this.user = JSON.parse(this.set.setUser()) ;
     this.username = this.user["name"];
  }

 addData(price,quantity,ml){
    function adddetails(price , quantity , ml,orginalPrice){
        this.price = price;
        this.quantity = quantity;
        this.ml = ml;
        this.orginalPrice = orginalPrice;
    }
    this.toastr.success('if you want select another product!', 'Product added!');
   this.products.push(new adddetails(price , Number(quantity),ml,price*quantity));
   this.order.setOrder(this.products)
 }



}
