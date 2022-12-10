
import { Component, OnInit } from '@angular/core';
import { User } from '../entidades/user';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  activos: User[] = [];
  control:boolean = false;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.getUsuarioActivo();
  }
  getUsuarioActivo(): void {
    this.loginService.getActivos().subscribe(activos => this.activos =activos);
    this.control=true;
  }
}
