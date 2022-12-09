import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../entidades/videojuego';
import { VideojuegoService } from '../servicios/videojuego.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  videojuegos: Videojuego[] = [];

  constructor(private videojuegoService: VideojuegoService) { }

  ngOnInit(): void {
    this.getVideojuegos();
  }

  getVideojuegos(): void {
    this.videojuegoService.getVideojuegos()
      // .subscribe(videojuegos => this.videojuegos = videojuegos.slice(1, 5));
      .subscribe(videojuegos => this.videojuegos = videojuegos);
  }
}
