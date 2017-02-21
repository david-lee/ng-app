import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../core/config.service';
import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'ml-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  userModel = {
    username: '',
    password: ''
  };

  constructor(private authenticationService: AuthenticationService, 
    private router: Router,
    config: ConfigService) {
  }

  ngOnInit() {
    console.log("LoginComponent...");
  }

  login() {
    this.loading = true;
    this.authenticationService
        .login (this.userModel.username, this.userModel.password)
        .subscribe (
          data => {
            this.router.navigate(['/dashboard'])
          },
          error => {
            this.loading = false;
          }
        );
    }
}
