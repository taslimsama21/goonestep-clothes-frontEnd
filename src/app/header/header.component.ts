import { Component } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    private roles: string[];
    isLoggedIn = false;
    showAdminBoard = false;
    showUserBoard = false;
    username: string;
    

    constructor(private tokenStorageService: TokenStorageService) { }

    ngOnInit() {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
    
        if (this.isLoggedIn) {
          const user = this.tokenStorageService.getUser();
          this.roles = user.roles;
    
          this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
          this.showUserBoard = this.roles.includes('ROLE_USER');
    
          this.username = user.username;
        }
    
}
logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  

}