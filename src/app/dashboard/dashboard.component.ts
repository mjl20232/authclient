import { Component } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private authService: AuthorizationService) {}

   create(name: string, email: string, password:string) : void {
    this.authService.create({
      name: "Todd Motto",
      email: "todd@iscool.com",
      password: '1234'
    });
   
  }
  login(email: string, password : string) {
    this.authService.login({
      email: "todd@iscool.com",
      password: "1234"
    });
  }

  
  resetPassword(email:string) {
    this.authService.resetPassword({
      email: "todd@iscool.com"
    });  
  }
 

}
