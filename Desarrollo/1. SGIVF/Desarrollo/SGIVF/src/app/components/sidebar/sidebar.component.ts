import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: Routes = [
    { path: '/dashboard', title: 'Gráficas',  icon: 'dashboard', component: 'DashboardComponent' },
    { path: '/user-profile', title: 'Ventas',  icon:'person', component: 'UserProfileComponent' },
    { path: '/table-list', title: 'Inventario',  icon:'content_paste', component: 'TableListComponent' },
    { path: '/typography', title: 'Ayuda',  icon:'library_books', component: 'TypographyComponent' }
    /*{ path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
*/];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
