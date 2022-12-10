import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Videojuego } from '../entidades/videojuego';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  /**
   * Método propio de InMemoryDbService que simula una BBDD en memoria con una WEB API
   * @returns -la lista de videojuegos, la lista de usuarios
   */
  createDb() {
    let contadorJuegos : number = 1;
    let contadorUsuarios : number = 1;
    const videojuegos = [
      { id: contadorJuegos++, 
      titulo: 'Final Fantasy VI', 
      company: "Square Enix", 
      imagen: "../assets/img/finalFantasyVI.png", 
      notaMedia:8.4},

    { id: contadorJuegos++, 
      titulo: 'Monkey Island', 
      company: "LucasArts", 
      imagen: "../assets/img/monkeyisland.jpg", 
      notaMedia:8.9},

    { id: contadorJuegos++, 
      titulo: 'Fallout 3', 
      company: "Bethesda", 
      imagen: "../assets/img/fallout3.jpg", 
      notaMedia:7.4},

    { id: contadorJuegos++, 
      titulo: 'Persona4', 
      company: "Square Enix", 
      imagen: "../assets/img/persona4.jpg", 
      notaMedia:8.4},

    { id: contadorJuegos++, 
      titulo: 'Grim Fandango', 
      company: "LucasArts", 
      imagen: "../assets/img/grimfandango.jpg", 
      notaMedia:8.9},

    { id: contadorJuegos++, 
      titulo: 'Skyrim', 
      company: "Bethesda", 
      imagen: "../assets/img/skyrimV.jpg", 
      notaMedia:7.9},
    
     { id: contadorJuegos++, 
      titulo: 'The Last of Us II', 
      company: "Naughty Dog", 
      imagen: "../assets/img/tlof2.png", 
      notaMedia:8.9},

     { id: contadorJuegos++, 
      titulo: 'Dream Daddy', 
      company: "Game Grumps", 
      imagen: "../assets/img/dreamdaddy.jpg", 
      notaMedia:9.3},
    
    ];
    const users =[
      {id: contadorUsuarios++,
      email: "irene_guion@gmail.com",
      password: "dreamDaddy5",
      username: "Irene_Uncharted"
      },
      {id: contadorUsuarios++,
      email:"ruben_lju@gmail.com",
      password: "Kallisti",
      username: "Ruben_lj8"
      }
    ];
    
    return {videojuegos, users};
  }
  
  /**
   * Método que sobreescribe genId ede InMemoryDbService para asegurarse de que un videojuego siempre tiene un ID
   * @param videojuegos - la lista de videojuegos en Memoria
   * @returns el numero 1 si no existen videojuegos en memoria o si existen, el  id del ultimo videojuego
   * de la lista más 1.
   */
  genId(videojuegos: Videojuego[]): number {
    return videojuegos.length > 0 ? Math.max(...videojuegos.map(videojuego => 
      videojuego.id)) + 1 : 2;
  }
}