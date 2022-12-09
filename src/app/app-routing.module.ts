import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { HomeComponent } from './home/home.component';
import { DetalleVideojuegoComponent } from './detalle-videojuego/detalle-videojuego.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detalle/:id', component: DetalleVideojuegoComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'contacto', component: VideojuegosComponent },
  { path: 'about', component: VideojuegosComponent },
  { path: "login", component: LoginComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }