import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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
import { SuscriptorService } from './services/suscriptor.service';
import { ServicioService } from './services/servicio.service';
import { FooterComponent } from './footerComponent/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    mainComponent,
    servicioComponent,
    mensajesComponent,
    crearcuentaComponent,
    vistaservicioComponent,
    mascotaComponent,
    vistamascotaComponent,
    perfilComponent,
    mostrarserviciosComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SuscriptorService, ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }