import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './main/navbar/products/products.component';
import { AboutComponent } from './main/navbar/about/about.component';
import { HomeDetailsComponent } from './main/navbar/home-details/home-details.component';
import { OrdersComponent } from './main/navbar/orders/orders.component';
import { FormsModule }   from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from './admin/admin.component';
import { AdminProductComponent } from './admin-product/admin-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    NavbarComponent,
    MainComponent,
    ProductsComponent,
    AboutComponent,
    HomeDetailsComponent,
    OrdersComponent,
    AdminComponent,
    AdminProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      positionClass:'toast-bottom-center'
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
