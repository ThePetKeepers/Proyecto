import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Entidades } from "../clases/entidades";
import { EntidadesService } from "../services/entidades.service";
import { LoginServices } from "../services/login.service";

@Component({
    selector:'login-comp',
    templateUrl:'login.component.html',
    styleUrls:['login.component.css'],
    providers:[LoginServices]
})

export class loginComponent implements OnInit{
    email = '';
    password = '';
    email2= '';
    password2= '';
    constructor(private loginService:LoginServices) { }


    loginUser(){
        
        this.loginService.loguearUsuario(this.email,this.password)
        .subscribe(
            (result) => {
                console.log(result.login);
                    if(result.login == true){
                        this.loginService.postDadesAjax(this.email,this.password)
                        .subscribe(
                            (result) => {
                                console.log(result);
                                localStorage.setItem("token",result.token);
                                document.location.href = 'http://localhost:4200/';
                
                            },(error)=>{console.log("error: ",error)}
                        
                        );
                    }else{
                        alert("Contraseña incorrecta");
                    }
            },(error)=>{console.log("error: ",error)}
        
        );
/*
        this.loginService.postDadesAjax(this.email,this.password)
        .subscribe(
            (result) => {
                console.log(result);
                localStorage.setItem("token",result.token);

            },(error)=>{console.log("error: ",error)}
        
        );*/
    }
    registerUser(){
        
        this.loginService.registrarUsuario(this.email2,this.password2)
        .subscribe(
            (result) => {
                console.log(result);
                this.loginService.postDadesAjax(this.email2,this.password2)
                .subscribe(
                    (result) => {
                        console.log(result);
                        localStorage.setItem("token",result.token);
                        document.location.href = 'http://localhost:4200/entidades';
        
                    },(error)=>{console.log("error: ",error)}
                
                );

            },(error)=>{console.log("error: ",error)}
        
        );


    }
    logout(){
        localStorage.removeItem("token");
        window.location.reload();
    }
    ngOnInit(): void {

    }
    
}
