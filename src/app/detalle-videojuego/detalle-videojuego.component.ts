import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Videojuego } from '../entidades/videojuego';
import { VideojuegoService } from '../servicios/videojuego.service';

@Component({
  selector: 'app-detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: [ './detalle-videojuego.component.css' ]
})
export class DetalleVideojuegoComponent implements OnInit {

  videojuego: Videojuego | undefined;

  constructor(
    private route: ActivatedRoute,
    private videojuegoService: VideojuegoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getVideojuego();
  }

  getVideojuego(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.videojuegoService.getVideojuego(id)
      .subscribe(videojuego => this.videojuego = videojuego);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.videojuego) {
      this.videojuegoService.updateVideojuego(this.videojuego)
        .subscribe(() => this.goBack());
    }
  }
}