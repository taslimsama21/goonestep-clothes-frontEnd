import { AllProductsComponent } from './dashboard/user-dashboard/all-products/all-products.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './dashboard/admin-dashboard/product/product.component';
import { ProductDetailsComponent } from './dashboard/admin-dashboard/product/product-details/product-details.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { from } from 'rxjs';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';

import { authInterceptorProviders } from './interceptor/auth.interceptor';
import { IsAdminDirective } from './custom-directives/is-admin.directive';
import { UsersComponent } from './dashboard/admin-dashboard/users/users.component';
import { AddProductComponent } from './dashboard/admin-dashboard/product/add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { UserOrdersComponent } from './dashboard/user-dashboard/user-orders/user-orders.component';
import { AdminOrdersComponent } from './dashboard/admin-dashboard/admin-orders/admin-orders.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductDetailsComponent,
    AllProductsComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    IsAdminDirective,
    UsersComponent,
    AddProductComponent,
    HomeComponent,
    UserOrdersComponent,
    AdminOrdersComponent,
    UserOrdersComponent,
    AdminOrdersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
