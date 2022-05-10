import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntidadesService } from './services/entidades.service';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EntidadesService,UsuarioService]
})
export class AppComponent {
  title = 'Practica05';

  constructor(private _entidadesService:EntidadesService, private _usuarioService:UsuarioService){

}

  token=false;
  logout(){
    localStorage.removeItem("token");
    document.location.href = 'http://localhost:4200/';
  }
  limit=true;
  search='';
  id=0;
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
            var mail = resul;
            this._usuarioService.getUserByEmail(mail).subscribe(
                (resul)=>{
                    this.id=resul.id;
                    console.log(this.id);
                    
                },
                (error)=>{
                    console.log(error);
                }
            )

        },
        (error)=>{
            console.log(error);
        }
    )
    }
}
