import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Videojuego } from '../entidades/videojuego';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let contador : number = 1;
    
    const videojuegos = [
      { id: contador++, 
      titulo: 'Final Fantasy VI', 
      company: "Square Enix", 
      imagen: "../assets/img/finalFantasyVI.png", 
      notaMedia:8.4},

    { id: contador++, 
      titulo: 'Monkey Island', 
      company: "LucasArts", 
      imagen: "../assets/img/monkeyisland.jpg", 
      notaMedia:8.9},

    { id: contador++, 
      titulo: 'Fallout 3', 
      company: "Bethesda", 
      imagen: "../assets/img/fallout3.jpg", 
      notaMedia:7.4},

    { id: contador++, 
      titulo: 'Persona4', 
      company: "Square Enix", 
      imagen: "../assets/img/persona4.jpg", 
      notaMedia:8.4},

    { id: contador++, 
      titulo: 'Grim Fandango', 
      company: "LucasArts", 
      imagen: "../assets/img/grimfandango.jpg", 
      notaMedia:8.9},

    { id: contador++, 
      titulo: 'Skyrim', 
      company: "Bethesda", 
      imagen: "../assets/img/skyrimV.jpg", 
      notaMedia:7.9},
    
     { id: contador++, 
      titulo: 'The Last of Us II', 
      company: "Naughty Dog", 
      imagen: "../assets/img/tlof2.png", 
      notaMedia:8.9},

     { id: contador++, 
      titulo: 'Dream Daddy', 
      company: "Game Grumps", 
      imagen: "../assets/img/dreamdaddy.jpg", 
      notaMedia:9.3},
    
    ];
    const users =[
      {email: "irene_guion@gmail.com",
      password: "dreamDaddy5"
      },
      {email:"ruben_lju@gmail.com",
      password: "Kallisti"
      }
    ];
    return {videojuegos, users};
  }
  


  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(videojuegos: Videojuego[]): number {
    return videojuegos.length > 0 ? Math.max(...videojuegos.map(videojuego => 
      videojuego.id)) + 1 : 2;
  }
}