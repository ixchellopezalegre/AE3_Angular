import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  user?: string;
  email?: string;
  mensaje?: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: any){  

}
}
