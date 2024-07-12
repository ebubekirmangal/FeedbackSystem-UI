import { Routes } from '@angular/router';
import { HomePageComponent } from './routh/home-page/home-page.component';
import { LogPageComponent } from './routh/log-page/log-page.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full' 
    },
    {
        path:'home',
        component:HomePageComponent
    },
    {
        path:'logPage',
        component:LogPageComponent
    }
];
