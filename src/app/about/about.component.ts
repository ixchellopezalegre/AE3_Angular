import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

/**
 * Clase que devuelve el componente about, que recoge informacion sobre la aplicación y sus desarolladores
 */
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
