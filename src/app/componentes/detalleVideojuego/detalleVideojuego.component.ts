import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleVideojuego',
  templateUrl: './detalleVideojuego.component.html',
  styleUrls: ['./detalleVideojuego.component.css']
})

export class DetalleVideojuegoComponent implements OnInit {
  
    id : number = 0;
    titulo : string = ''
    company : string = ''
    img : string =''
    valMedia : number = 0;
  
    mostrar = false
  
    //INYECCIÓN DE DEPENDENCIAS EN ANGULAR
    //Cuando nosotros no creamos un objeto y le pedimos a un tercero (Angular) que nos lo cree
    //y nos de su referencia
  
    //En Angular, podemos solicitar en el constructor de un componente que nos inyecte objetos
    
    //En este caso, le solicitaremos un objeto de tipo ActivatedRoute, que es una clase 
    //cuyas instancias representan a la ruta presente en la barra de navegación
    //Basicamente se usa para recoger parámetros que nos envian otros componentes
  
    constructor(route : ActivatedRoute) { 
      console.log("Creando Componente1")
      console.log(`nombre: ${this.titulo}`)
  
      
  
      //Para recuperar los parametros de query es parecido al caso anterior
      //pero usando "queryParams"
      this.id = route.snapshot.queryParams["id"]
      this.titulo = route.snapshot.queryParams["titulo"]
      this.valMedia = route.snapshot.queryParams["valMedia"]
      console.log(this.titulo)
  
    }
  
    ngOnInit() {
    }
  
  }
