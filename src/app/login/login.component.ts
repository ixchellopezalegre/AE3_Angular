import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from '../entidades/user';
import { UsersService } from '../servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
    users: User[] = [];
    email:string="";
    password: string="";
    username: string="";
    control: boolean=true;

    constructor(private usersService: UsersService,
                private router: Router) { }
    
    /**
     * Método que se inciia con el inicio del servidor y obtiene todos los 
     */            
    ngOnInit(): void {
      this.getUsers();
    }
    /**
     * 
     */
    getUsers() {
      this.usersService.getUsers()
      .subscribe(users => this.users = users);
    }
  

    login(){
      this.users.forEach(user => {
        if((this.email === user.email) && (this.password === user.password)){
          console.log(this.email + " es el introducido " + user.email + " es el que coincide en nuestra bbdd")
         
          this.username = user.username;
          
          alert(`Bienvenido ${this.username}`);
          this.router.navigateByUrl('/videojuegos/'+this.username);
        }
       
      },
      );
      this.control=false;
      
    }

}
