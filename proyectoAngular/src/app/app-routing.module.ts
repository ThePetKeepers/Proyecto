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
import { vistamascotaComponent } from './vistamascotaComponent/vistamascota.component';
import { perfilComponent } from './perfilComponent/perfil.component';
import { SubscriptionsComponentComponent } from './subscriptionsComponent/subscriptions.component';
import { crearservicioComponent } from './crearservicioComponent/crearservicio.component';
import { crearmascotaComponent } from './crearmascotaComponent/crearmascota.component';
import { crearsubscriptionComponent } from './crearsubscriptionComponent/crearsubscription.component';
import { nosotrosComponent } from './nosotrosComponent/nosotros.component';
import { funcionamientoComponent } from './funcionamientoComponent/funcionamiento.component';
import { preguntasComponent } from './preguntasComponent/soporte.component';
import { condicionesComponent } from './condicionesComponent/condiciones.component';
import { cookiesComponent } from './cookiesComponent/cookies.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { ListadoMascotasComponent } from './listado-mascotas/listado-mascotas.component';
const routes: Routes = [
  {path:'',component:mainComponent},
  {path:'main',component:mainComponent},
  {path:'login',component:loginComponent},
  {path:'servicio',component:servicioComponent},
  {path:'productos',component:ListadoProductosComponent},
  {path:'productos/:tipo',component:ListadoProductosComponent},
  {path:'mascotas',component:ListadoMascotasComponent},
  {path:'mascotas/:tipo',component:ListadoMascotasComponent},
  {path:'suscripciones/:id',component:SubscriptionsComponentComponent},
  {path:'servicio/:tipo',component:servicioComponent},
  {path:'mensajes',component:mensajesComponent},
  {path:'crearcuenta',component:crearcuentaComponent},
  {path:'vistaservicio/:servicio',component:vistaservicioComponent},
  {path:'vistamascota/:mascota',component:vistamascotaComponent},
  {path:'perfil',component:perfilComponent},
  {path:'perfil/:id',component:perfilComponent},
  {path:'crearServicio',component:crearservicioComponent},
  {path:'crearServicio/:id',component:crearservicioComponent},
  {path:'crearMascota/:id',component:crearmascotaComponent},
  {path:'crearSuscripcion/:id/:type',component:crearsubscriptionComponent},
  {path:'quienesSomos',component:nosotrosComponent},
  {path:'comoFunciona',component:funcionamientoComponent},
  {path:'preguntasFrecuentes',component:preguntasComponent},
  {path:'condicionesDeUso',component:condicionesComponent},
  {path:'cookies',component:cookiesComponent},
  {path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }