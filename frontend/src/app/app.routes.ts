import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListingComponent } from './listing/listing.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { FavoriteListingComponent } from './favorite-listing/favorite-listing.component';
import { MyAdsComponent } from './my-ads/my-ads.component';

export const routes: Routes = [
    {path: '', component: MainComponent, title:'Main'},
    {path: 'my/ads', component: MyAdsComponent, title: 'My Ads'},
    {path: 'favorites', component: FavoriteListingComponent, title:"Favorite"},
    {path: 'user/:type', component: LoginComponent, title:"Login"},
    {path: ':listingType', component: MainComponent, title:'Listing Type'},
    {path: ':listingType/:propertyType', component: ListingComponent, title:'Property Type'},
    {path: ':listingType/:propertyType/:id', component: DetailComponent, title:'Detail'},
    
    {path: '**', redirectTo:''},
    
];
