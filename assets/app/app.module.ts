import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {HeadersComponent} from "./headers.component";
import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {ErrorComponent} from "./error/error.component";
import {ErrorService} from "./error/error.service";
import {MessageModule} from "./messages/message.module";

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeadersComponent,
        ErrorComponent
    ],
    imports: [BrowserModule,routing,HttpModule,MessageModule],
    providers:[AuthService,ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}