import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
})
export class MainComponent {

  routes: Object[] = [{
    title: 'Dashboard',
    route: '/dashboard',
    icon: 'dashboard',
  }, {
    title: 'Product Dashboard',
    route: '/product',
    icon: 'view_quilt',
  }, {
    title: 'Product Logs',
    route: '/logs',
    icon: 'receipt',
  }, {
    title: 'Menu ***',
    route: '/menu',
    icon: 'menu',
  }, {
    title: 'Manage Users',
    route: '/users',
    icon: 'people',
  }, {
    title: 'Restaurant Profile ***',
    route: '/profile',
    icon: 'people',
  }
  ];

  constructor(private _router: Router) {
  }

  logout(): void {
    this._router.navigate(['/login']);
  }
}
