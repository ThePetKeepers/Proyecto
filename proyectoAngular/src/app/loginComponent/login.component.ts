import { Component, OnInit } from "@angular/core";
import { LoginServices } from "../services/login.service";
import { UsuarioService } from "../services/usuario.service";
import { credencialesUsuario } from "../clases/credencialesLogin";
@Component({
    selector: 'login-comp',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    providers: [LoginServices, UsuarioService]
})

export class loginComponent implements OnInit {
    email = '';
    password = '';
    email2 = '';
    password2 = '';
    credenciales: credencialesUsuario = new credencialesUsuario();

    constructor(
        private loginService: LoginServices,
        private usuarioService: UsuarioService
    ) { }


    loginUser() {
        this.loginService.loguearUsuario(this.email, this.password)
            .subscribe(
                (result) => {
                    console.log(result.login);
                    if (result.login == true) {
                        this.loginService.postDadesAjax(this.email, this.password)
                            .subscribe(
                                (result) => {
                                    console.log(result);
                                    localStorage.setItem("token", result.token);
                                    document.location.href = 'http://localhost:4200/';

                                }, (error) => { console.log("error: ", error) }

                            );
                    } else {
                        alert("Contraseña incorrecta");
                    }
                }, (error) => { console.log("error: ", error) }

            );
    }

    loginJava() {
        this.credenciales = new credencialesUsuario(this.email, this.password);
        this.usuarioService.getUsarioIdByLogin(this.credenciales)
            .subscribe((id) => {
                this.usuarioService.getUsuarioById(id)
                    .subscribe((resultado) => {
                        localStorage.setItem("login", "true");
                        localStorage.setItem("usuarioLogueado", id);
                        localStorage.setItem("rol", resultado.tipo_usuario);

                    }, (err) => {
                        console.log(err);
                    });
            }, (error) => {
                console.log(error);
            });
        //document.location.href = 'http://localhost:4200/';
        /*
        globalVars.usuarioLogueado = "Adeu";
        console.log(globalVars.usuarioLogueado)
        */
        /*
        this.loginService.loguearUsuario(this.email, this.password)
            .subscribe((result) => {
                console.log(result.login);
                if (result.login == true) {
                    localStorage.setItem("token", result.token);
                } else {
                    alert("Contraseña incorrecta");
                }
            }, (error) => { console.log("error: ", error) });
        */
    }

    /*
    registerUser() {
        this.loginService.registrarUsuario(this.email2, this.password2)
            .subscribe(
                (result) => {
                    console.log(result);
                    this.loginService.postDadesAjax(this.email2, this.password2)
                        .subscribe(
                            (result) => {
                                console.log(result);
                                localStorage.setItem("token", result.token);
                                document.location.href = 'http://localhost:4200/';

                            }, (error) => { console.log("error: ", error) }

                        );

                }, (error) => { console.log("error: ", error) }

            );
    }
    */

    logout() {
        localStorage.removeItem("token");
        window.location.reload();
    }

    ngOnInit(): void {

    }

}
