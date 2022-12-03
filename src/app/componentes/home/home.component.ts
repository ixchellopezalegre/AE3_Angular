import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo : string = ``
  company : string = ''

  //Para hacer routas programáticas debemos de usar el objeto "router"
  //Le pedimos a Angular que nos lo inyecte cuando cree este componente
  constructor(private router:Router) {

  }

  //Para hacer routing programático debemos de usar el objeto "router"
  //Muy util cuando queremos mete logica de navegación o el componente
  //donde queremos ir depende de otros parámetros
  public routingProgramatico(){
    console.log("Navegando...")
    //Podemos establecer de manera programática a donde queremos ir mediante
    //el objeto router que hemos inyectado previamente
    this.router.navigate([ '/detalleVideojuego', this.titulo, this.company])
  }

  public routingProgramaticoQueryParam(){
    console.log("Navegando con query param...")
    this.router.navigateByUrl(`/detalleVideojuego?parametro1=${this.titulo}&parametro2=${this.company}`)
  }

  ngOnInit() {
  }

}

