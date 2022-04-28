import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntidadesService } from './services/entidades.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EntidadesService]
})
export class AppComponent {
  title = 'Practica05';

  constructor(private _entidadesService:EntidadesService){

}

  token=false;
  logout(){
    localStorage.removeItem("token");
    document.location.href = 'http://localhost:4200/';
  }
  limit=true;
  search='';
  buscador(){
    if(this.search == ''){
        this.limit=true;
    }else{
        this.limit=false;
    }
   
    }

    sendit(){
    if(this.search == ''){
        this.limit=true;
    }else{
        this.limit=false;
    }
    document.location.href = 'http://localhost:4200/servicio/'+this.search;
   }

  ngOnInit(): void {
    
      this._entidadesService.getToken().subscribe(
          (resul)=>{ 
              console.log(resul);
              if(resul["correcte"]==true){
                  this.token=true;
              }
          },
          (error)=>{
              console.log(error);
          }
      )

      this._entidadesService.getUsrToken().subscribe(
        (resul)=>{ 
            console.log(resul);

        },
        (error)=>{
            console.log(error);
        }
    )
    }
}
