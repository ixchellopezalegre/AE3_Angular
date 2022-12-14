import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Para NgModule importamos esto de Angular:
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './servicios/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { DetalleVideojuegoComponent } from './detalle-videojuego/detalle-videojuego.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent,
    DetalleVideojuegoComponent,
    MensajesComponent,
    ContactoComponent,
    AboutComponent,
    NavbarComponent,
   LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // El modulo  HttpClientInMemoryWebApiModule intercepta peticiones HTTP
    // y devuelve respuestas simuladas del servidor.
    // Cuando un servidor real esté listo para recibir peticiones, se podrá quitar.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
