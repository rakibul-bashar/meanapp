import {RouterModule, Routes} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";


const App_Routes:Routes=[
    {path:'',redirectTo:'/messages',pathMatch:'full'},
    {path:'messages',component:MessagesComponent},
    {path:'auth',component:AuthenticationComponent,loadChildren:'./auth/auth.module#AuthModule'}
];
export const routing=RouterModule.forRoot(App_Routes)