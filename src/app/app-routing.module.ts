import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { DetalleVideojuegoComponent } from './detalle-videojuego/detalle-videojuego.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  //El inicio de la aplicación lleva automáticamente al login.
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  //He decidido hacer un uso sencillo del enrutamiento por 
  //parametro para transferir el userName a la pagina principal
  { path: 'videojuegos/:username', component: VideojuegosComponent },
  { path: 'detalle/:id', component: DetalleVideojuegoComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'about', component: AboutComponent },
  { path: "login", component: LoginComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }