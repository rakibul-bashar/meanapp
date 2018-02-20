import {Component} from "@angular/core";
import {AuthService} from "./auth.service";

@Component({
    selector:'app-authetication',
    template:`
    <header class="row spacing">
        <nav class="col-md-8 col-md-offset-2">
            <ul class="nav nav-tabs">
                <li routerLinkActive="active"><a [routerLink]="['signup']">SignUp </a></li>
                <li routerLinkActive="active" *ngIf="!isLoggedin()" > <a [routerLink]="['signin']">SignIn</a></li>
                <li routerLinkActive="active" *ngIf="isLoggedin()" > <a [routerLink]="['logout']">LogOut</a></li>
            </ul>
        </nav>
    </header>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AuthenticationComponent{
    constructor(private authService:AuthService){}
    isLoggedin(){
        return this.authService.isLoggedin();
    }
}