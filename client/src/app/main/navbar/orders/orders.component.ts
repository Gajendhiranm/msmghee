import { Component, OnInit } from '@angular/core';
import { OrderListService } from 'src/app/order-list.service';
import { UserDetailService } from 'src/app/user-detail.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
 
  public useraddress="";
 public  orders = [];
 public user : Object = {};
 public total = 0;
 public user_id = ""
constructor(private order : OrderListService,private set: UserDetailService,
  private toastr: ToastrService,
  private router: Router){}

  ngOnInit() : void{
    this.user = JSON.parse(this.set.setUser()) ;
    console.log(this.user)
    this.user_id = this.user["_id"];

   this.orders = this.order.cartOrders;
    for (const key in this.orders) 
      {
          this.total += this.orders[key].orginalPrice;
      }

  }

  downloadInvoice(){
    var doc = new jsPDF();
    let headContent = [[ 'Name','Quantity', 'Ml', 'Price']];
    let tableDatas =this.orders.map(Object.values)
    
    doc.setFontSize(18);
    doc.text('Msm Ghee Order  Invoice', 75, 10);
    doc.line(75, 12, 147, 12);

    doc.setFontSize(13);
    doc.text('Name  : ', 120, 30);
    doc.text('Email : ', 120, 36);
    doc.text('Phone : ', 120, 43);
    
    doc.setFontSize(12);
    doc.text(this.user['name'], 140, 30);
    doc.text(this.user['email'],140, 36);
    doc.text(this.user['number'],140, 43);
    doc.line(10, 45, 200, 45);
    
    doc.setFontSize(11);
    doc.text('Total Price  : ', 10, 150);
    doc.text(`${this.total}`, 38, 150);
    doc.text('Your order is received', 10, 156);
    doc.text('Thanks for Ordering', 10, 169);

    doc.text(`${this.total}`, 38, 150);

    doc.setFontSize(11);
    doc.setTextColor(100);


    (doc as any).autoTable({
      margin: {top: 48},
      head: headContent,
      body: tableDatas,
      theme: 'striped',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })

    // below line for Open PDF document in new tab
    doc.output('dataurlnewwindow')

    // below line for Download PDF document  
    doc.save(`${this.user['name']} Invoice.pdf`);
    console.log("downloading invoice");
    console.log(this.orders)
  }

  submitData = async(address) =>{
     this.useraddress = address;
     console.log(this.useraddress , this.orders)
     const URL = "/order";
            const response = await fetch(URL, {
              method: "PATCH",
              body: JSON.stringify({
                address: this.useraddress,
                checkout_products : this.orders,
                id:this.user_id, 
              }),
              headers:{
                "Content-type":"application/json",
              }
            }); 
       if(response.status == 200){
       this.toastr.success('We have received your order','Thank you for ordering !!!');
       this.router.navigate(['/login']);
       }
       this.toastr.success('We have received your order','Thank you for ordering !!!');
       this.router.navigate(['/login']);
    }
   
}
