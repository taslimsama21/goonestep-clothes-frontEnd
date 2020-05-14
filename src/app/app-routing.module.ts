import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { WomenComponent } from './women/women.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'kids',component:KidsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
