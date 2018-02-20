import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "./user.model";
import {AuthService} from "./auth.service";

@Component({
    selector:'app-signup',
    templateUrl:'./signup.component.html'
})
export class SignupComponent implements OnInit{

    constructor(private authService:AuthService){}

    myform:FormGroup;

    onSubmit(){
        const user=new User(
            this.myform.value.email,
            this.myform.value.password,
            this.myform.value.firstname,
            this.myform.value.lastname
        );
        this.authService.signUp(user)
            .subscribe(
                data=>console.log(data),
                error=>console.error(error)
            )
        this.myform.reset();
    }
    ngOnInit(){
        this.myform=new FormGroup({
            firstname:new FormControl(null,Validators.required),
            lastname:new FormControl(null,Validators.required),
            email:new FormControl(null,[
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password:new FormControl(null,Validators.required),
        });
    }

}

