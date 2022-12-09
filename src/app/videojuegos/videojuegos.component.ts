import { Component, OnInit } from '@angular/core';

import { Videojuego } from '../entidades/videojuego';
import { VideojuegoService } from '../servicios/videojuego.service';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  videojuegos: Videojuego[] = [];

  constructor(private videojuegoService: VideojuegoService) { }

  ngOnInit(): void {
    this.getVideojuegos();
  }

  getVideojuegos(): void {
    this.videojuegoService.getVideojuegos()
    .subscribe(videojuegos => this.videojuegos = videojuegos);
  }

  add(titulo: string): void {
    titulo = titulo.trim();
    if (!titulo) { return; }
    this.videojuegoService.addVideojuego({ titulo } as Videojuego)
      .subscribe(videojuego => {
        this.videojuegos.push(videojuego);
      });
  }

  delete(videojuego: Videojuego): void {
    this.videojuegos = this.videojuegos.filter(v => v !== videojuego);
    this.videojuegoService.deleteVideojuego(videojuego.id).subscribe();
  }

}