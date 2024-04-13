import { Routes } from '@angular/router';
import { MyAdsComponent } from './my-ads/my-ads.component';

export const routes: Routes = [
    { path: '', redirectTo: 'my', pathMatch: 'full' },
    { path: 'my', component: MyAdsComponent },
    
];
