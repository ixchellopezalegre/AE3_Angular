import { Component, OnInit } from '@angular/core';
//Importamos la entidad Videojuego.
import { Videojuego } from 'src/app/entidades/videojuego';


@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})

/**
 * Clase que se va a encargar de mostrar la lista de componentes
 */
export class VideojuegosComponent implements OnInit {

  listaVideojuegos : Videojuego[] = []
  videojuego : Videojuego | null = null

  //Datos que recogeremos del formulario:
  id : number = 0
  titulo : string = ""
  company : string = ""
  valMedia : number = 0
  img : string = ""

  constructor() {
    let videojuego : Videojuego = new Videojuego("Final Fantasy VI", "Square Enix", 8.4, "src/img")
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego("Monkey Island", "LucasArts", 8.9, "src/img")
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego("Grim Fandango", "LucasArts", 7.9, "src/img")
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego("Fallout 3", "Bethesda", 7.4, "src/img")
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego("Persona4", "Square Enix", 8.9, "src/img")
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego("The Elder Scrolls V: Skyrim", "Bethesda", 8.9, "src/img")
   }
  

  /**
   * Método que carga en el formulario el Videojuego elegido en la tabla de la lista de Videojuegos.
   * Una vez elegido el Videojuego, podremos modificarlo o borrarlo, pero no insertarlo.
   * El boton de insertar se deshabilitará, pero se habilitarán los botones de modificar
   * y de borrar
   * @param Videojuego representa el Videojuego que queremos cargar en el formulario
   */
   public seleccionar(videojuego : Videojuego) : void{
  
      console.log("Seleccionando...")
  
      //let copia : Heroe = new Heroe(heroe.nombre, heroe.universo)
      this.id = videojuego.id
      this.titulo = videojuego.titulo
      this.company = videojuego.company
  
    }

  ngOnInit() {
  }

}
