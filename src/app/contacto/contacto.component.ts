import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
//Clase que simula el envio de un formulario de contacto a una BBDD.
export class ContactoComponent implements OnInit {
  
  nombre?:string;
  email?:string;
  mensaje?:string;

  constructor() {
  }

  ngOnInit(): void {
  }
  /**
   * Método que envia una alerta al usuario cuando el mensaje es
   * "enviado" y limpia el contendio del formulario.
   */
  onSubmit(){  
    alert(`Hemos enviado tu mensaje ${this.nombre}`);
    this.nombre='';
    this.email='';
    this.mensaje='';
}
}
