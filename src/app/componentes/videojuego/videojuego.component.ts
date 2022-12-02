import { Component, Input, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/entidades/videojuego';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit {

  //Al no estar inicializado, da error, asi que hemos modificado
  //el archivo tsconfig.json

  @Input() videojuego : Videojuego;
  
  constructor() { }

  ngOnInit() {
  }

}
