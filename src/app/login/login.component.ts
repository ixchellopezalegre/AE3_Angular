import { Component, OnInit } from '@angular/core';
import { User } from '../entidades/user';
import { MensajeService } from '../servicios/mensaje.service';
import { UsersService } from '../servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
    users: User[] = [];

    constructor(private usersService: UsersService) { }
  
    ngOnInit(): void {
      this.getUsers();
    }
    getUsers(): void {
      this.usersService.getUsers()
      .subscribe(users => this.users = users);
    }
    

    private _email: string = "";

    public get email(): string {

    return this._email;
    }

    public set email(value: string) {
      this._email = value;
    }
    password : string ="";
    username : string = "";
    
    show: boolean= false;
    valido: boolean= false;
    
    submit(){
    console.log("El email es " + this.email)
     
    }
  
  

    login(){
      this.users.forEach(user => {
        if((this.email === user.email) && (this.password === user.password)){
          console.log(this.email + " es el introducido " + user.email + " es el que coincide en nuestra bbdd")
          this.valido = true;
          alert("Login success");
          this.username = user.username;
          window.location.replace("/home");
        };
        
      },
      );
    }

}
