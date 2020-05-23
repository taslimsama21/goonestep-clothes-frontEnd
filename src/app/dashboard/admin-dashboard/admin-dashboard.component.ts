import { Component, OnInit } from '@angular/core';
import { UserService } from '/Users/Tas/Documents/angular_projects/goonestep-clothes-app/src/app/services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  content = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
        
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
