import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'ml-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = true;
  activeMenu: string;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  public setActive(activeMenu: string) {
    this.activeMenu = activeMenu;
  }

  public toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  public isActiveMenu(activeLink: string): boolean {
    return this.activeMenu === activeLink;
  }
}
