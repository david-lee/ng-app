import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../core/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  projectName = 'app works!';

  constructor(config: ConfigService) {
    this.projectName = config.projectName;
   }

  ngOnInit() {
    console.log("LoginComponent...");
  }
}
