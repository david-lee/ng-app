import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ml-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = true;
  activeMenu: string;

  constructor() { }

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
