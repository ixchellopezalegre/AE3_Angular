import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Videojuego } from '../entidades/videojuego';
import { VideojuegoService } from '../servicios/videojuego.service';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {
  control :boolean= false;
  username : string | undefined;
  videojuegos: Videojuego[] = [];
 

  constructor(private videojuegoService: VideojuegoService,
    private routeUser: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserName()
    this.getVideojuegos();
  }

  getUserName():void{
    if (this.username = this.routeUser.snapshot.paramMap.get('username')!){
      this.control=true;
    };
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