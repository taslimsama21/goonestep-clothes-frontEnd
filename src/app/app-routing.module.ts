import { ProductComponent } from './dashboard/admin-dashboard/product/product.component';
import { UsersComponent } from './dashboard/admin-dashboard/users/users.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './dashboard/user-dashboard/men/men.component';
import { KidsComponent } from './dashboard/user-dashboard/kids/kids.component';
import { WomenComponent } from './dashboard/user-dashboard/women/women.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';


const appRoutes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'kids',component:KidsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'user',component:UserDashboardComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'admin/users', component:UsersComponent},
  {path: 'admin/products', component:ProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
