import { Routes } from '@angular/router';
import { MyAdsComponent } from './my-ads/my-ads.component';
import { NewAdComponent } from './new-ad/new-ad.component';

export const routes: Routes = [
    { path: '', redirectTo: 'my', pathMatch: 'full' },
    { path: 'my', component: MyAdsComponent },
    { path: 'ad/new', component: NewAdComponent },
];
