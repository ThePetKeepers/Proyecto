import { Component, OnInit } from "@angular/core";
//import { countries } from "./countries/country-data-store";

@Component({
    selector:'perfil-comp',
    templateUrl:'perfil.component.html',
    styleUrls:['perfil.component.css']
    //providers:[EntidadesService,RegistrarServices]
})


export class perfilComponent implements OnInit{
    //public countries: any = countries;
    step = 0;
    ngOnInit(): void {
    }
    edit() {
        if(this.step == 0) {
            this.step = 1;
        } else if(this.step == 1){
            this.step = 0;
        }
    }
}
