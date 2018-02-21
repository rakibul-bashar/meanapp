
import {User} from "./user.model";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {ErrorService} from "../error/error.service";

@Injectable()
export class AuthService{
    constructor(private http:Http, private errorService:ErrorService){}
    signUp(user:User){
        const body =JSON.stringify(user)
        const headers=new Headers({'Content-Type':'application/json'});
        return this.http.post('https://angularmessenger-rakib.herokuapp.com/user',body,{headers:headers})
            .map((response:Response)=>response.json())
            .catch((error:Response)=> {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
    signin(user:User){
        const body =JSON.stringify(user)
        const headers=new Headers({'Content-Type':'application/json'});
        return this.http.post('https://angularmessenger-rakib.herokuapp.com/user/signin',body,{headers:headers})
            .map((response:Response)=>response.json())
            .catch((error:Response)=> {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
    logOut(){
        localStorage.clear()
    }

    isLoggedin(){
        return localStorage.getItem('token')!==null;
    }
}