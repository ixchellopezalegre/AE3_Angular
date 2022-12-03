import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleVideojuego',
  templateUrl: './detalleVideojuego.component.html',
  styleUrls: ['./detalleVideojuego.component.css']
})

export class DetalleVideojuegoComponent implements OnInit {
  
    titulo : string = ''
    company : string = ''
    img : string =''
    valMedia : number = 0;
  
    parametroQuery1: string = ''
    parametroQuery2: string = ''
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
  
      //Accedemos a los valores contenidos en la ruta por el nombre que declaramos
      //ruta.snapshot.params['dato'], siendo "dato" el identificador que hemos declarado
      //en el fichero de routing (:dato)    
      //En nuestro caso:
      this.titulo = route.snapshot.params["titulo"]
      this.company = route.snapshot.params["company"]
  
      //Para recuperar los parametros de query es parecido al caso anterior
      //pero usando "queryParams"
      this.parametroQuery1 = route.snapshot.queryParams["parametro1"]
      this.parametroQuery2 = route.snapshot.queryParams["parametro2"]
      console.log(this.parametroQuery1)
  
      //Solo mostramos el div con los query params en caso de que me llegue información
      //por dichos query params
      if(this.parametroQuery1 != null){
        this.mostrar = true
      }
    }
  
    ngOnInit() {
    }
  
  }
