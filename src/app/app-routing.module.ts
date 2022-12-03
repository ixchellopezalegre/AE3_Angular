import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { DetalleVideojuegoComponent } from './componentes/detalleVideojuego/detalleVideojuego.component';
import { VideojuegosComponent } from './componentes/videojuegos/videojuegos.component';

/*
Este fichero es donde configuraremos las rutas de la aplicación.

const routes: Routes = [];
*/
const routes: Routes = [
  {
    path : '', //En este caso decimos el componente que mostraremos por defecto
    component : HomeComponent
  },
  {
    path : 'detalle', //cuando definimos el 'path' no puede empezar por '/'
    component : DetalleVideojuegoComponent
  },

  {
    path : 'videojuegos', //cuando definimos el 'path' no puede empezar por '/'
    component : VideojuegosComponent
  },

  {path : 'home', component : HomeComponent},
  //aqui estamos pasando parametros en el pahtparam, eje: componente1/spiderman/marvel
  {path : 'detalle/:titulo/:company', component : DetalleVideojuegoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}