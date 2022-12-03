import { Component, OnInit } from '@angular/core';
//Importamos la entidad Videojuego.
import { Videojuego } from 'src/app/entidades/videojuego';
import { VideojuegoService } from 'src/app/services/videojuego.service';


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

  //Datos que recogeremos del formulario:
  id : number = 0
  titulo : string = ""
  company : string = ""
  valMedia : number = 0
  img : string = ""

  //Mediante la inyección de dependencias, cuando angular cree este componente, 
  //le pasará algún objeto de tipo PersonaService que hayamos declarado en nuestra aplicación.
  //Como efectivamente hemos declarado la clase PersonaService anotada con @Inyectable, 
  //le pasará dicho objeto para que podamos usarlo.
 
  constructor(private  _videojuegoService : VideojuegoService) {
   this._videojuegoService = _videojuegoService
   //Cargamos la lista de heroes al inicializar el componente
   this.listaVideojuegos = _videojuegoService.listar()
  }
  

  /**
   * Método que carga en el formulario el Videojuego elegido en la tabla de la lista de Videojuegos.
   * Una vez elegido el Videojuego, podremos modificarlo o borrarlo, pero no insertarlo.
   * El boton de insertar se deshabilitará, pero se habilitarán los botones de modificar
   * y de borrar
   * @param Videojuego representa el Videojuego que queremos cargar en el formulario
   */
   public seleccionar(idVideojuego : number) : void{
  
      console.log("Seleccionar -> Seleccionando..." + idVideojuego)
      
      let videojuego = this._videojuegoService.acceder(idVideojuego)

      if(videojuego != null){
        this.id = videojuego.id
        this.titulo = videojuego.titulo      
        this.company = videojuego.company
        this.valMedia = videojuego.valMedia
        this.img = videojuego.img
      console.log("Seleccionar -> Videojuego encontrado")
  
    }else{
      console.log("Seleccionar -> Videojuego  no encontrado")
    }
   }

  ngOnInit() {
    
  }

}
