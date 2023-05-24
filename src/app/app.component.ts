import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../AuthorizationService;
import { Authorization } from '../hero.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  users: Authorization[] = [];

  constructor(private authService: AuthorizationService) { }

  ngOnInit(): void {
    this.users = authService.getUsers();
  }

  getUsers(): void {
    this.authService.getUsers()
      .subscribe(usersByName => this.users = usersByName.slice(1, 5));
  }
}