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
  
  username?:string;
  email?:string;

  constructor(private logueado: LoginComponent) { 
    this.username=logueado.username;
    this.email=logueado.email;
  }

  ngOnInit(): void {
  }

  onSubmit(value: any){  

}
}
