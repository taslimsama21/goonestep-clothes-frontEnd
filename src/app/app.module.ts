import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { OrderComponent } from './order/order.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    OrderComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
