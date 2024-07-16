import { Routes } from '@angular/router';
import { HomePageComponent } from './routh/home-page/home-page.component';
import { LogPageComponent } from './routh/log-page/log-page.component';
import { CustomerFeedbackComponent } from './shared/form/form.component';
import { MyAccountComponent } from './routh/my-account/my-account.component';
import { ListFeedbackComponent } from './routh/customer/list-feedback/list-feedback.component';
import { AdminPanelComponent } from './routh/admin/admin-panel/admin-panel.component';
import { FeedbackReplyComponent } from './routh/admin/feedback-reply/feedback-reply.component';
import { adminGuard } from './features/user/guard/admin.guard';
import { FeedbackFormComponent } from './routh/customer/feedback-form/feedback-form.component';


export const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full' 
    },
    {
        path:'home',
        component:HomePageComponent
    },
    {
        path:'log-page',
        component:LogPageComponent
    },
    {
        path:'admin',
        component:AdminPanelComponent,children:[
            {
                path:'feedback-reply',
                component:FeedbackReplyComponent
            },
            { path: '', redirectTo: 'feedback-reply', pathMatch: 'full' }
        ],canActivate:[adminGuard]
    },
    {
        path:'create-feedback',
        component:FeedbackFormComponent
    },
    {
        path:'my-account',
        component:MyAccountComponent
    },
    {
        path:'list-feedback',
        component:ListFeedbackComponent
    },
    
];
