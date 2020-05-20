import { HttpClientService } from './../../../services/http-client.service';
import { User } from './../../../model/User.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User>;
  
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );  
  }
  handleSuccessfulResponse(response) {
    this.users = response;
  }
}
