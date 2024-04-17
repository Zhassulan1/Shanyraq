import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListingComponent } from './listing/listing.component';

export const routes: Routes = [
    {path: '', component: MainComponent, title:'Main'},
    {path: ':listingType', component: MainComponent, title:'Listing Type'},
    {path: '***', redirectTo:''},
    {path: ':listingType/:propertyType', component: ListingComponent, title:'Property Type'}
];
