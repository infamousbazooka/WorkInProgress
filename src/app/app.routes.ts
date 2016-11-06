import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main/main.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardProductComponent} from './dashboard-product/dashboard-product.component';
import {ProductOverviewComponent} from './dashboard-product/overview/overview.component';
import {ProductStatsComponent} from './dashboard-product/stats/stats.component';
import {ProductFeaturesComponent} from './dashboard-product/features/features.component';
import {FeaturesFormComponent} from './dashboard-product/features/+form/form.component';
import {UsersComponent} from './users/users.component';
import {UsersFormComponent} from './users/+form/form.component';
import {LogsComponent} from './logs/logs.component';
import {DetailComponent} from './detail/detail.component';
import {LoginComponent} from './login/login.component';
import {FormComponent} from './form/form.component';
import {RegisterComponent} from "./register/register.component";
import {MenuComponent} from "./menu/menu.component";
import {MenuFormComponent} from "./menu/menu-form/menu-form.component";
import {RestaurantProfileComponent} from "./restaurant-profile/restaurant-profile.component";

const routes: Routes = [

  {path: 'register', component: RegisterComponent},

  {
    path: '', component: MainComponent, children: [

    {
      component: LoginComponent,
      path: '',
    },

    {
      path : 'dashboard',
      component : DashboardComponent,

    },


    {
      path: 'product', component: DashboardProductComponent, children: [
      {path: '', component: ProductOverviewComponent},
      {path: 'stats', component: ProductStatsComponent},
      {
        path: 'features', children: [
        {path: '', component: ProductFeaturesComponent},
        {path: 'add', component: FeaturesFormComponent},
        {path: ':id/delete', component: FeaturesFormComponent},
        {path: ':id/edit', component: FeaturesFormComponent},
      ]
      },
    ]
    },
    {path: 'item/:id', component: DetailComponent},
    {path: 'logs', component: LogsComponent},
    {path: 'form', component: FormComponent},
    {
      path: 'users', children: [
      {path: '', component: UsersComponent},
      {path: 'add', component: UsersFormComponent},
      {path: ':id/delete', component: UsersFormComponent},
      {path: ':id/edit', component: UsersFormComponent},
    ]
    },


    {
      path: 'menu', children: [
      {path: '', component: MenuComponent},
      {path: 'add', component: MenuFormComponent},

    ]
    },

    {
      path: 'profile', children: [
      {path: '', component: RestaurantProfileComponent},

    ]
    },


  ]
  },
];

export const appRoutingProviders: any[] = [];

export const appRoutes: any = RouterModule.forRoot(routes, {useHash: true});
