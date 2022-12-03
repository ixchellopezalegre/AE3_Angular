import { Injectable } from '@angular/core';
import { Videojuego } from '../entidades/videojuego';


//Los servicios en Angular se inyectan, jamás los crearemos con 'new'.
//Para ello usaremos el decorador @Inyectable sobre la clase.

//Aqúi estamos diciendo a Angular que cree un objeto de tipo HeroeService
//por nosotros (Inversión de Control) y que podrá ser inyectado en otros objetos 
//(Inyección de Dependencias)

//Con "providedIn: 'root'" hacemos que el servicio tenga un comportamiento de
//'Singleton", es decir, el objeto será único para toda la aplicación.

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  //Al ser el objeto unico, no tenemos porque hacer esta vez el atributo estatico
  private contadorId : number = 1;
  private listaVideojuegos : Videojuego[] = []

  constructor() { 
    let videojuego : Videojuego = new Videojuego()
    videojuego.id = this.contadorId++//Aquí estamos invocando al set aunque no lo parezca...
    videojuego.titulo = "Final Fantasy VI"//Lo mismo de arriba...
    videojuego.company = "Square Enix"
    videojuego.valMedia = 8.4;
    videojuego.img = "src/img.jpg"
    this.listaVideojuegos.push(videojuego);

    videojuego = new Videojuego()
    videojuego.id = this.contadorId++
    videojuego.titulo = "Monkey Island"
    videojuego.company = "LucasArts"
    videojuego.valMedia = 8.9;
    videojuego.img = "src/img.jpg"
    this.listaVideojuegos.push(videojuego)

    videojuego = new Videojuego()
    videojuego.id = this.contadorId++
    videojuego.titulo = "Grim Fandango"
    videojuego.company = "LucasArts"
    videojuego.valMedia = 7.9;
    videojuego.img = "src/img.jpg"
    this.listaVideojuegos.push(videojuego)

    videojuego = new Videojuego()
    videojuego.id = this.contadorId++
    videojuego.titulo = "Fallout 3"
    videojuego.company = "Bethesda"
    videojuego.valMedia = 8.9;
    videojuego.img = "src/img.jpg"
    this.listaVideojuegos.push(videojuego)

    videojuego = new Videojuego()
    videojuego.id = this.contadorId++
    videojuego.titulo = "PErsona4"
    videojuego.company = "Square Enix"
    videojuego.valMedia = 8.9;
    videojuego.img = "src/img.jpg"
    this.listaVideojuegos.push(videojuego)

    videojuego = new Videojuego()
    videojuego.id = this.contadorId++
    videojuego.titulo = "The Elder Scrolls V: Skyrim"
    videojuego.company = "Bethesda"
    videojuego.valMedia = 8.9;
    videojuego.img = "src/img.jpg"
    this.listaVideojuegos.push(videojuego)

  }

  /**
   * Método que inserta un heroe en una lista generando su id
   * @param videojuego a insertar
   */
  public insertar(videojuego : Videojuego){
    videojuego.id = this.contadorId++
    this.listaVideojuegos.push(videojuego)
  }
  
  /**
   * Método que modifica un heroe de una lista si se encuentra dentro de ella
   * @param videojuego a modificar
   * @returns true en caso de que se haya modificado, false en caso contrario
   */
  public modificar(videojuego : Videojuego): boolean{       
    for(let a=0; a<this.listaVideojuegos.length; a++){
      let videoAux = this.listaVideojuegos[a]
      if(videoAux.id == videojuego.id){
        this.listaVideojuegos[a] = videojuego
        return true;
      }
    }
    
    return false//En principio no se deberia dar nunca este caso
  }

  /**
   * Método que borra un heroe a partir de un id
   * @param id del heroe qvideojuego que queremos borrar
   * @returns true en caso de que el id exista en la lista y se haya podido borrar, false en 
   * caso contrario.
   */
  public borrar(id : number) : boolean{    
    for(let a=0; a<this.listaVideojuegos.length; a++){
      if( this.listaVideojuegos[a].id == id){
        this.listaVideojuegos.splice(a,1)
        return true
      }
    }
    return false;//No debería darse nunca este caso
  }

  /**
   * Metodo que devuelve un videojuego de la lista a partir de su id
   * @param id 
   * @returns el videojuego en caso de que hayamos encontrado su id, null en caso de que no exista el id
   * en la lista.
   */
  public acceder(id : number) : Videojuego | null{    
    for(let a=0; a<this.listaVideojuegos.length; a++){
      if( this.listaVideojuegos[a].id == id){
        return this.listaVideojuegos[a]
      }
    }
    return null//No debería darse nunca este caso
  }

  /**
   * Método que devuelve todos los videojuegos en una lista
   * @returns la lista de videojuegos
   */
  public listar(): Videojuego[]{
    return this.listaVideojuegos
  }

  ngOnInit() {

  }
}
