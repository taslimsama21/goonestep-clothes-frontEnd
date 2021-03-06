import { AdminOrdersComponent } from './dashboard/admin-dashboard/admin-orders/admin-orders.component';
import { UserOrdersComponent } from './dashboard/user-dashboard/user-orders/user-orders.component';


import { AllProductsComponent } from './dashboard/user-dashboard/all-products/all-products.component';
import { ProductComponent } from './dashboard/admin-dashboard/product/product.component';
import { UsersComponent } from './dashboard/admin-dashboard/users/users.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';


const appRoutes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'admin/home',component:AdminDashboardComponent},
  {path:'user/home',component:UserDashboardComponent},
  {path:'all-products',component:AllProductsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'user',component:UserDashboardComponent},
 { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'admin/users', component:UsersComponent},
  {path: 'admin/products', component:ProductComponent},
  {path:'user/orders',component:UserOrdersComponent},
  {path:'admin/orders',component:AdminOrdersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
