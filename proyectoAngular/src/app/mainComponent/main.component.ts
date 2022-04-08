import { OnInit } from "@angular/core";
import { Component } from '@angular/core';
import { Mascota } from "../clases/mascota";
import { Producto } from "../clases/producto";
import { Servicio } from "../clases/servicio";
import { EntidadesService } from "../services/entidades.service";
import { mascotaService } from "../services/mascota.service";
import { ProductoService } from "../services/producto.service";
import { ServicioService } from "../services/servicio.service";

@Component({
    selector:'main-comp',
    templateUrl:'main.component.html',
    styleUrls:['main.component.css'],
    providers:[EntidadesService,ProductoService,ServicioService,mascotaService]
})



export class mainComponent implements OnInit{
  constructor(private _entidadesService:EntidadesService, private _productoService:ProductoService, private _servicioService:ServicioService, private _mascotaService:mascotaService){

  }
    productos: Array<Producto> = [];
    servicios: Array<Servicio> = [];
    mascotas: Array<Mascota> = [];
    mybutton: any;
    token=false;
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

        this._productoService.getTop5Productos()
          .subscribe(async (resultado)=>{
            console.log(resultado);
            this.productos = resultado;
          },(error)=>{
            console.log("Error: "+error);
          })


        this._servicioService.getTop5Servicios()
          .subscribe(async (resultado)=>{
            console.log(resultado);
            this.servicios = resultado;
          },(error)=>{
            console.log("Error: "+error);
          })

        this._mascotaService.getTop5Mascotas()
          .subscribe(async (resultado)=>{
            console.log(resultado);
            this.mascotas= resultado;
          },(error)=>{
            console.log("Error: "+error);
          })

        this.mybutton = document.getElementById("btn-back-to-top");
        this.mybutton.addEventListener("click", backToTop);
        window.onscroll = function () {
           scrollFunction();
        };
        function scrollFunction(this: any) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              this.mybutton.style.display = "block";
            } else {
              this.mybutton.style.display = "none";
            }
          }
          function backToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }
    }
    
}
