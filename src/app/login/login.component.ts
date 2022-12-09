import { Component, OnInit } from '@angular/core';
import { User } from '../entidades/user';
import { UsersService } from '../servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    opcion:number = 0;
    users: User[] = [];
    constructor(private usersService: UsersService) { }
  
    ngOnInit(): void {
      this.getUsers();
    }
    getUsers(): void {
      this.usersService.getUsers()
      .subscribe(users => this.users = users);
    }

    email : string ="";
    password : string ="";
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
          window.location.replace("/home");
        };
        
      },
      );
    }

}
