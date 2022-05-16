import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { loginComponent } from './loginComponent/login.component';
import { mainComponent } from './mainComponent/main.component';
import { PageNotFoundComponent } from './PageNotFoundComponent/pagenotfound.component';
import { servicioComponent } from './servicioComponent/servicio.component';
import { mensajesComponent } from './mensajesComponent/mensajes.component';
import { crearcuentaComponent } from './crearcuentaComponent/crearcuenta.component';
import { vistaservicioComponent } from './vistaservicioComponent/vistaservicio.component';
import { mascotaComponent } from './mascotaComponent/mascota.component';
import { vistamascotaComponent } from './vistamascotaComponent/vistamascota.component';
import { perfilComponent } from './perfilComponent/perfil.component';
import { mostrarserviciosComponent } from './mostrarserviciosComponent/mostrarservicios.component';
import { SubscriptionsComponentComponent } from './subscriptionsComponent/subscriptions.component';
import { crearservicioComponent } from './crearservicioComponent/crearservicio.component';
import { crearmascotaComponent } from './crearmascotaComponent/crearmascota.component';
import { crearsubscriptionComponent } from './crearsubscriptionComponent/crearsubscription.component';


const routes: Routes = [
  {path:'',component:mainComponent},
  {path:'main',component:mainComponent},
  {path:'login',component:loginComponent},
  {path:'servicio',component:servicioComponent},
  {path:'suscripciones/:id',component:SubscriptionsComponentComponent},
  {path:'servicio/:tipo',component:servicioComponent},
  {path:'mensajes',component:mensajesComponent},
  {path:'crearcuenta',component:crearcuentaComponent},
  {path:'vistaservicio/:servicio',component:vistaservicioComponent},
  {path:'mascota',component:mascotaComponent},
  {path:'mascota/:id',component:mascotaComponent},
  {path:'vistamascota/:mascota',component:vistamascotaComponent},
  {path:'perfil',component:perfilComponent},
  {path:'perfil/:id',component:perfilComponent},
  {path:'servicio',component:mostrarserviciosComponent},
  {path:'crearServicio',component:crearservicioComponent},
  {path:'crearServicio/:id',component:crearservicioComponent},
  {path:'crearMascota/:id',component:crearmascotaComponent},
  {path:'crearSuscripcion/:id/:type',component:crearsubscriptionComponent},
  {path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }