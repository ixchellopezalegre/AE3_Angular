import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private loginUrl = 'api/login';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private router:Router,  
    private http: HttpClient,
    private mensajeService: MensajeService) { }
  
  login(email:string, password:string){
  }

  }
