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
  projectName = 'app works!';
  loading: boolean = false;
  userModel = {
    username: '',
    password: ''
  };

  constructor(private authenticationService: AuthenticationService, 
    private router: Router,
    config: ConfigService) 
  {
    this.projectName = config.projectName;
  }

  ngOnInit() {
    console.log("LoginComponent...");
  }

  login() {
    console.log('login...', this.userModel.username, this.userModel.password);
    this.loading = true;
    this.authenticationService
        .login (this.userModel.username, this.userModel.password)
        .subscribe (
          data => {
            console.log('---> ', data);
            this.router.navigate(['/dashboard'])
          },
          error => {
            console.log('===> ', error);
            this.loading = false;
          }
        );
    }
}
