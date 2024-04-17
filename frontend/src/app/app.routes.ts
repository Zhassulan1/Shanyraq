import { Routes } from '@angular/router';

import {DetailComponent} from "./detail/detail.component";
import {SalesComponent} from "./sales/sales.component";
import {RentsComponent} from "./rents/rents.component";
import {MainComponent} from "./main/main.component";

export const routes: Routes = [
  {path: '', redirectTo: 'main/', pathMatch: 'full'},
  {path: 'main', component: MainComponent, title: 'Krisha.kz'},
  {path: 'sales/flats', component: SalesComponent, title: 'Sales'},
  {path: 'rents/flats', component: RentsComponent, title: 'Rents'},
  {path: 'sales/flats/:id', component: DetailComponent, title: 'Flat\'s detail info'},
  {path: 'rents/flats/:id', component: DetailComponent, title: 'Flat\'s detail info'},
];
