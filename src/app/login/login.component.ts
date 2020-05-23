import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        //this.router.navigate(['admin/home']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }

    );
  }

  // reloadPage() {
  //   if(this.showAdminBoard = this.roles.includes('ROLE_ADMIN')){
  //     this.router.navigate(['admin-home']);
  //   }
  //   else if(this.showUserBoard = this.roles.includes('ROLE_USER'))
  //   {
  //     this.router.navigate(['user-home']);
  //   }
  // }

  reloadPage(){
    window.location.reload();
    //this.router.navigate(['admin-home']);
  }

}
