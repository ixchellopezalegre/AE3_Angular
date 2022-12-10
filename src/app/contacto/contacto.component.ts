import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { UsersService } from '../servicios/user.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  nombre?:string;
  email?:string;
  mensaje?:string;

  constructor() { 

  }

  ngOnInit(): void {
  }

  onSubmit(){  
    alert(`Hemos enviado tu mensaje ${this.nombre}`);
    this.nombre='';
    this.email='';
    this.mensaje='';
}
}
