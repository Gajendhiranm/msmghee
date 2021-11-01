import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './main/navbar/about/about.component';
import { HomeDetailsComponent } from './main/navbar/home-details/home-details.component';
import { OrdersComponent } from './main/navbar/orders/orders.component';
import { ProductsComponent } from './main/navbar/products/products.component';
import { SigninComponent } from './signin/signin.component';



const routes: Routes = [

  {
    path:'home',
    component:HomeDetailsComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
   path:"signin",
   component:SigninComponent,
  },
  {
    path:"product",
    component:ProductsComponent,
  },
  {
    path:"order",
    component:OrdersComponent,
  },
  {
    path:"admin",
    component:AdminComponent,
    },
    {
      path:"admin-product",
      component:AdminProductComponent    },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
